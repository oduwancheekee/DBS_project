import PrimaryButton from '../ui/PrimaryButton';
import classes from './NavigationBarSection.module.css';

function NavigationBarSection(props) {
  return (
    <div className={classes.navigationBox}>
      <div className={classes.buttonBox}>
        <PrimaryButton
          buttonTitle="Normal Table"
          onClick={props.onNormalTableClick}
        />
      </div>
      <div className={classes.buttonBox}>
        <PrimaryButton buttonTitle="Diagram" />
      </div>
      <div className={classes.buttonBox}>
        <PrimaryButton buttonTitle="Heatmap" />
      </div>
      <div className={classes.buttonBox}>
        <PrimaryButton buttonTitle="Button 4" />
      </div>
      <div className={classes.buttonBox}>
        <PrimaryButton buttonTitle="Button 5" />
      </div>
      <div className={classes.buttonBox}>
        <PrimaryButton buttonTitle="Button 6" />
      </div>
    </div>
  );
}

export default NavigationBarSection;
