import React from "react";

function HomePage() {
  return (
    <main className="container center" id="main-content">
        
        {/* This is a Semantic HTML Change : change from div to section tag */}
        <section className="page-area">
            <div className="text-box">
                {/* This is a SEO Change : using heading tags correctly, replacing <h1> with <h2> */}
                {/* This is a SEO Change : Descriptive <h1> tag- change from "stay on track" to "Track Your Spending Effectively" */}
                <h2>Track Your Spending Effectively</h2>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </div>
    
            <div className="text-box">
                <h2>Alerts</h2>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </div>
    
            <div className="text-box">
                <h2>Results</h2>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </div>
    
            <div className="text-box">
                <h2>Free</h2>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
            </div>

            <div className="text-box">
                <h2>Stay on track</h2>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </div>
    
            <div className="text-box">
                <h2>Alerts</h2>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </div>
    
            <div className="text-box">
                <h2>Results</h2>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </div>
    
            <div className="text-box">
                <h2>Budget Chart</h2>
                <div>
                    <canvas id="myChart" width="400" height="400"></canvas>
                </div>
            </div>

            <div className="chart-area center">
                <h1>D3 Budget Chart</h1>
                <button className="randomize">Refresh</button>
            </div>

            <div className="chart-area center">
                <h1>D3 Budget Bar Chart</h1>
                <div id="barChart"></div>
            </div>            

        </section>

    </main>

  );
}

export default HomePage;