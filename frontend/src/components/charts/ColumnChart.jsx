import React from 'react';
import ReactApexChart from 'react-apexcharts';
import classes from './Charts.module.css';
import { useState, useEffect } from 'react';

const ColumnChart = (props) => {
  const [regionLebels, setRegionLebels] = useState([]);
  const [stolenValues, setStolenValues] = useState([]);

  useEffect(() => {
    const result = props.data;
    const lengthR = result.length;
    console.log(lengthR);
    const labelsArray = [];
    const infoArray = [];
    for (let i = 0; i < lengthR; i++) {
      labelsArray.push(props.data[i].bezirk);
      infoArray.push(props.data[i].stolen);
    }
    setRegionLebels(labelsArray);
    setStolenValues(infoArray);
    console.log(labelsArray);
    console.log(infoArray);
  }, []);

  const series = [
    {
      // data: [21, 22, 10, 28, 16] /*, 21, 13, 30]*/,
      data: stolenValues,
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
      categories: regionLebels,
      // categories: [
      //   ['John', 'Doe'],
      //   ['Joe', 'Smith'],
      //   ['Jake', 'Williams'],
      //   'Amber',
      //   ['Peter', 'Brown'],
      //   // ['Mary', 'Evans'],
      //   // ['David', 'Wilson'],
      //   // ['Lily', 'Roberts'],
      // ],
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
