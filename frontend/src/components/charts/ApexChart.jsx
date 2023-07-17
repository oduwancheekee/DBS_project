import React from 'react';
import ReactApexChart from 'react-apexcharts';
import classes from './Charts.module.css';
import { useState, useEffect } from 'react';

const ApexChart = (props) => {
  const [dayLebels, setDayLebels] = useState([]);
  const [stolenValues, setStolenValues] = useState([]);

  useEffect(() => {
    const result = props.data;
    const lengthR = result.length;
    console.log(lengthR);
    const labelsArray = [];
    const infoArray = [];
    for (let i = 0; i < lengthR; i++) {
      labelsArray.push(props.data[i].day);
      infoArray.push(props.data[i].stolen);
    }
    setDayLebels(labelsArray);
    setStolenValues(infoArray);
    console.log(labelsArray);
    console.log(infoArray);
  }, []);

  const series = [
    {
      name: 'Desktops',
      data: stolenValues,
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    title: {
      text: 'Product Trends by Month',
      align: 'left',
    },
    grid: {
      row: {
        colors: ['#c3e8c3', 'transparent'],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: dayLebels,
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        background-color="#c3e8c3"
        options={options}
        series={series}
        type="line"
        height={'100%'}
      />
    </div>
  );
};

export default ApexChart;
