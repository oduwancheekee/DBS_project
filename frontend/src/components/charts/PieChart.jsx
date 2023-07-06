import React from 'react';
import ReactApexChart from 'react-apexcharts';
import classes from './Charts.module.css';
const PieChart = () => {
  const series = [44, 55, 13, 43, 22];

  const options = {
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  return (
    <div id="chart" className={classes.chart}>
      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        // width={380}
        heigth="100%"
        width="200%"
      />
    </div>
  );
};

export default PieChart;
