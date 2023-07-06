import { useEffect, useState } from 'react';
import ApexChart from '../../ApexChart';
import classes from './IndexMainContent.module.css';
import axios from 'axios';
import NavigationBarSection from '../../../layouts/NavigationBarSection';

function IndexMainContent(props) {
  // const [isNormalTableClicked, setIsNormalTableClicked] = useState(false);
  // useEffect({
  axios
    .get('http://localhost:8887/dummyData')
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });

  // function onNormalTableClickHandler() {
  //   console.log('Normal Table clicked');
  //   // setIsNormalTableClicked(true);
  // }

  // },[])
  return (
    <div className={classes.mainContent}>
      <div className={classes.navigationBarSection}>
        <NavigationBarSection />
      </div>
      <div className={classes.diagramSection}>
        <ApexChart />
      </div>
    </div>
  );
}

export default IndexMainContent;
