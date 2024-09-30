import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import PieChart from '../Charts/PieChart';
import D3Chart from '../Charts/D3Chart';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function HomePage() {
  const [dataSource, setDataSource] = useState({
    datasets: [
      {
        data: [],
        backgroundColor: [
          '#ffcd56',
          '#ff6384',
          '#36a2eb',
          '#fd6b19',
          '#FF00FF',
          '#7d3c98',
          '#DAF7A6',
          '#900C3F',
          '#FFC300'
        ],
      },
    ],
    labels: []
  });

  const [dataSourceNew, setDataSourceNew] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/budget')
      .then((res) => {
        const budgetData = res.data.myBudget || [];
        setDataSourceNew(budgetData);
        setDataSource({
          datasets: [
            {
              data: budgetData.map((v) => v.budget),
              backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                '#FF00FF',
                '#7d3c98',
                '#DAF7A6',
                '#900C3F',
                '#FFC300'
              ],
            },
          ],
          labels: budgetData.map((v) => v.title)
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <main className="container center" id="main">
    <div className="page-area">
      <article>
        <h1>Track Your Spending Effectively</h1>
        <p>
            Do you know where you are spending your money? If you really stop to track it down,
            you would get surprised! Proper budget management depends on real data... and this
            app will help you with that!
        </p>
      </article>

      <article>
        <h1>Alerts</h1>
        <p>
          What if your clothing budget ended? You will get an alert. The goal
          is to never go over the budget.
        </p>
      </article>

      <article>
        <h1>Results</h1>
        <p>
          People who stick to a financial plan, budgeting every expense, get
          out of debt faster! Also, they to live happier lives... since they
          expend without guilt or fear... because they know it is all good and
          accounted for.
        </p>
      </article>

      <article>
        <h1>Free</h1>
        <p>This app is free!!! And you are the only one holding your data!</p>
      </article>

      <article>
      <center>
        <PieChart dataSource={dataSource} />
        <D3Chart dataSource={dataSourceNew}/>
        </center>
      </article>
    </div>
  </main>
  );
}

export default HomePage;