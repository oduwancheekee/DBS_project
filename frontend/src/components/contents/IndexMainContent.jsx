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

  // useEffect({
  axios
    .get('http://localhost:8887/')
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });

  function onNormalTableClickHandler() {
    console.log('Normal Table clicked');
    setIsNormalTableClicked(true);
    setIsPieChartClicked(false);
    setIsColumnTableClicked(false);
    setIsHeatmapeClicked(false);
  }
  function onPieChartClickHandler() {
    console.log('Pie chart clicked');
    setIsNormalTableClicked(false);
    setIsPieChartClicked(true);
    setIsColumnTableClicked(false);
    setIsHeatmapeClicked(false);
  }

  function onColumnTableClickHandler() {
    console.log('Column chart clicked');
    setIsNormalTableClicked(false);
    setIsPieChartClicked(false);
    setIsColumnTableClicked(true);
    setIsHeatmapeClicked(false);
  }
  function onHeatmapClickHandler() {
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
      {isNormalTableClicked && <ApexChart />}
      {isPieChartClicked && <PieChart />}
      {isColumnTableClicked && <ColumnChart />}
      {isHeatmapClicked && (
        <div className={classes.heatMap}>
          <HeatMap />
        </div>
      )}
    </div>
  );
}

export default IndexMainContent;
