import React from 'react';
import ReactApexChart from 'react-apexcharts';
import classes from './Charts.module.css';

const ColumnChart = () => {
  const series = [
    {
      data: [21, 22, 10, 28, 16] /*, 21, 13, 30]*/,
    },
  ];

  const colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'];

  const options = {
    chart: {
      height: 350,
      type: 'bar',
      events: {
        click: (chart, w, e) => {
          // console.log(chart, w, e)
        },
      },
    },
    colors: colors,
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        ['John', 'Doe'],
        ['Joe', 'Smith'],
        ['Jake', 'Williams'],
        'Amber',
        ['Peter', 'Brown'],
        // ['Mary', 'Evans'],
        // ['David', 'Wilson'],
        // ['Lily', 'Roberts'],
      ],
      labels: {
        style: {
          colors: colors,
          fontSize: '12px',
        },
      },
    },
  };

  return (
    <div id="chart" className={classes.chart}>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={'100%'}
        width="400%"
      />
    </div>
  );
};

export default ColumnChart;
