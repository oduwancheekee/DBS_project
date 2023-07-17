import React, { useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import classes from './Charts.module.css';
import { useState } from 'react';
const PieChart = (props) => {
  const [regionLebels, setRegionLebels] = useState([]);
  const [damageValues, setDamageValues] = useState([]);

  useEffect(() => {
    const result = props.data;
    const lengthR = result.length;
    console.log(lengthR);
    const labelsArray = [];
    const infoArray = [];
    for (let i = 0; i < lengthR; i++) {
      labelsArray.push(props.data[i].bezirk);
      infoArray.push(props.data[i].damage * 0.0001);
    }
    setRegionLebels(labelsArray);
    setDamageValues(infoArray);
    console.log(labelsArray);
    console.log(infoArray);
  }, []);

  const series = damageValues;
  const options = {
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: regionLebels,
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
