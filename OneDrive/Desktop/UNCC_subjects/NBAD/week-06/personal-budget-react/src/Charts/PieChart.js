import React from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

function PieChart({ dataSource }) {
    return (
        <div className="chart-container" style={{width:350, height:400}}>
            <h2 style={{ textAlign: "center" }}>Chart JS</h2>
            <Pie
                data={dataSource}
            />
            <br/><br/>
        </div>
    );

}
export default PieChart;