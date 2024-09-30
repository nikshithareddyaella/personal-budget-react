import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import axios from 'axios';

const D3Chart = () => {
    const svgRef = useRef();
    const colorScale = d3.scaleOrdinal().range([
        '#BAFFC9', '#BAE1FF', '#C3B1E1',
        '#FFC3A0', '#33FF57', '#FF33A1',
        '#33FFC4', '#392F5A', '#FFB3BA'
    ]);

    useEffect(() => {
        const tooltip = d3.select('body').append('div')
            .attr('class', 'tooltip')
            .style('position', 'absolute')
            .style('visibility', 'hidden')
            .style('background', 'lightgrey')
            .style('padding', '5px')
            .style('border-radius', '5px')
            .style('pointer-events', 'none');

        const getBudgetData = async () => {
            try {
                const { data: { myBudget } } = await axios.get('http://localhost:5000/budget');
                createPieChart(myBudget);
                createBarChart(myBudget);
            } catch (error) {
                console.error('Error fetching budget data:', error);
            }
        };

        const createPieChart = (data) => {
            if (!data.length) return;

            const svg = d3.select(svgRef.current)
                .attr('width', 300)
                .attr('height', 300);

            const pie = d3.pie().value(d => d.budget);
            const arc = d3.arc().innerRadius(0).outerRadius(150);

            svg.selectAll('*').remove(); // Clear previous content
            const g = svg.append('g').attr('transform', 'translate(150,150)');

            g.selectAll('path')
                .data(pie(data))
                .enter()
                .append('path')
                .attr('d', arc)
                .attr('fill', d => colorScale(d.data.title))
                .attr('stroke', '#121926')
                .style('stroke-width', '1px')
                .on('mouseover', (event, d) => {
                    tooltip.style('visibility', 'visible')
                        .text(`${d.data.title}: $${d.data.budget}`)
                        .style('top', `${event.pageY - 10}px`)
                        .style('left', `${event.pageX + 10}px`);
                })
                .on('mousemove', (event) => {
                    tooltip.style('top', `${event.pageY - 10}px`)
                        .style('left', `${event.pageX + 10}px`);
                })
                .on('mouseout', () => tooltip.style('visibility', 'hidden'));

            g.selectAll('text')
                .data(pie(data))
                .enter()
                .append('text')
                .text(d => d.data.title)
                .attr('transform', d => `translate(${arc.centroid(d)})`)
                .style('text-anchor', 'middle')
                .style('font-size', 15);
        };

        const createBarChart = (data) => {
            d3.select('#barChart').selectAll('*').remove(); // Clear previous content

            const margin = { top: 10, right: 20, bottom: 30, left: 90 };
            const width = 400 - margin.left - margin.right;
            const height = 300 - margin.top - margin.bottom;

            const svgBar = d3.select('#barChart').append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                .attr('transform', `translate(${margin.left},${margin.top})`);

            const x = d3.scaleLinear()
                .domain([0, d3.max(data, d => d.budget)])
                .range([0, width]);

            const y = d3.scaleBand()
                .domain(data.map(d => d.title))
                .range([0, height])
                .padding(0.1);

            svgBar.selectAll('.bar')
                .data(data)
                .enter().append('rect')
                .attr('class', 'bar')
                .attr('x', 0)
                .attr('y', d => y(d.title))
                .attr('width', d => x(d.budget))
                .attr('height', y.bandwidth())
                .attr('fill', d => colorScale(d.title))
                .on('mouseover', (event, d) => {
                    tooltip.style('visibility', 'visible')
                        .text(`${d.title}: $${d.budget}`)
                        .style('top', `${event.pageY - 10}px`)
                        .style('left', `${event.pageX + 10}px`);
                })
                .on('mousemove', (event) => {
                    tooltip.style('top', `${event.pageY - 10}px`)
                        .style('left', `${event.pageX + 10}px`);
                })
                .on('mouseout', () => tooltip.style('visibility', 'hidden'));

            svgBar.append('g')
                .attr('class', 'x axis')
                .attr('transform', `translate(0,${height})`)
                .call(d3.axisBottom(x));

            svgBar.append('g')
                .attr('class', 'y axis')
                .call(d3.axisLeft(y));
        };

        getBudgetData();
    }, []);

    return (
        <div>
            <h2 style={{ textAlign: "center" }}>D3JS Pie Chart and Bar Chart</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', width: '100%' }}>
                <div className="chart-container" style={{ width: 350, height: 350 }}>
                    <svg ref={svgRef}></svg>
                </div>
                <div id="barChart" style={{ marginTop: '20px', width: 400 }}></div>
            </div>
        </div>
    );
};

export default D3Chart;
