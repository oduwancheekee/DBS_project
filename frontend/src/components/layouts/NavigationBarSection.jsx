import PrimaryButton from '../ui/PrimaryButton';
import classes from './NavigationBarSection.module.css';

function NavigationBarSection(props) {
  return (
    <div className={classes.navigationBox}>
      <div className={classes.buttonBox}>
        <PrimaryButton
          buttonTitle="Normal Table Chart"
          onClick={props.onNormalTableClick}
        />
      </div>
      <div className={classes.buttonBox}>
        <PrimaryButton buttonTitle="Piechart" onClick={props.onPieChartClick} />
      </div>
      <div className={classes.buttonBox}>
        <PrimaryButton
          buttonTitle="Column Chart"
          onClick={props.onColumnTableClick}
        />
      </div>
      <div className={classes.buttonBox}>
        <PrimaryButton buttonTitle="Heatmap" onClick={props.onHeatmapClick} />
      </div>
    </div>
  );
}

export default NavigationBarSection;
