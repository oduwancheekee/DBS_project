import { useEffect, useState } from 'react';
// import ApexChart from '../../charts/ApexChart';
import ApexChart from '../charts/ApexChart';
import classes from './IndexMainContent.module.css';
import axios from 'axios';
// import NavigationBarSection from '../../../layouts/NavigationBarSection';
import NavigationBarSection from '../../components/layouts/NavigationBarSection';
import PieChart from '../charts/PieChart';
import ColumnChart from '../charts/ColumnChart';
import HeatMap from '../charts/HeatMap';
// import { useState } from 'react';

function IndexMainContent(props) {
  const [isNormalTableClicked, setIsNormalTableClicked] = useState(false);
  const [isPieChartClicked, setIsPieChartClicked] = useState(false);
  const [isColumnTableClicked, setIsColumnTableClicked] = useState(false);
  const [isHeatmapClicked, setIsHeatmapeClicked] = useState(false);
  const [Results, setResults] = useState([]);

  // useEffect({

  async function onNormalTableClickHandler() {
    await axios
      .get('http://localhost:8887/linechart')
      .then((response) => {
        const data = response.data;
        const results = [];
        for (const key in data) {
          const result = {
            day: data[key].day,
            stolen: data[key].bikes_per_day,
          };

          results.push(result);
        }
        setResults(results);
        console.log(Results);
        console.log(results);
        console.log(typeof results);
        // setResults(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log('Normal Table clicked');
    setIsNormalTableClicked(true);
    setIsPieChartClicked(false);
    setIsColumnTableClicked(false);
    setIsHeatmapeClicked(false);
  }
  async function onPieChartClickHandler() {
    await axios
      .get('http://localhost:8887/piechart')
      .then((response) => {
        const data = response.data;
        // console.log(response.data);
        // console.log('Server response: ' + Results);
        const results = [];
        for (const key in data) {
          const result = {
            bezirk: data[key].bezirk,
            damage: data[key].schadenshoehe_pro_bezirk,
          };

          results.push(result);
        }
        setResults(results);
        console.log(Results);
        console.log(results);
        console.log(typeof results);
        // setResults(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log('Pie chart clicked');
    setIsNormalTableClicked(false);
    setIsPieChartClicked(true);
    setIsColumnTableClicked(false);
    setIsHeatmapeClicked(false);
  }

  async function onColumnTableClickHandler() {
    await axios
      .get('http://localhost:8887/columnchart')
      .then((response) => {
        const data = response.data;
        // console.log(response.data);
        // console.log('Server response: ' + Results);
        const results = [];
        for (const key in data) {
          const result = {
            bezirk: data[key].bezirk,
            stolen: data[key].quantity_per_area_per_borough,
          };

          results.push(result);
        }
        setResults(results);
        console.log(Results);
        console.log(results);
        console.log(typeof results);
        // setResults(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log('Column chart clicked');
    setIsNormalTableClicked(false);
    setIsPieChartClicked(false);
    setIsColumnTableClicked(true);
    setIsHeatmapeClicked(false);
  }
  async function onHeatmapClickHandler() {
    await axios
      .get('http://localhost:8887/heatmap')
      .then((response) => {
        const data = response.data;
        const results = [];
        for (const key in data) {
          const result = {
            area: data[key].planning_area,
            count: data[key].count,
          };

          results.push(result);
        }
        setResults(results);
        console.log(Results);
        console.log(results);
        console.log(typeof results);
        // setResults(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log('Column chart clicked');
    setIsNormalTableClicked(false);
    setIsPieChartClicked(false);
    setIsColumnTableClicked(false);
    setIsHeatmapeClicked(true);
  }

  return (
    <div className={classes.mainContent}>
      <div className={classes.navigationBarSection}>
        <NavigationBarSection
          onNormalTableClick={onNormalTableClickHandler}
          onPieChartClick={onPieChartClickHandler}
          onColumnTableClick={onColumnTableClickHandler}
          onHeatmapClick={onHeatmapClickHandler}
        />
      </div>
      {isNormalTableClicked && <ApexChart data={Results} />}
      {isPieChartClicked && <PieChart data={Results} />}

      {isColumnTableClicked && <ColumnChart data={Results} />}
      {isHeatmapClicked && (
        <div className={classes.heatMap}>
          <HeatMap data={Results} />
        </div>
      )}
    </div>
  );
}

export default IndexMainContent;
