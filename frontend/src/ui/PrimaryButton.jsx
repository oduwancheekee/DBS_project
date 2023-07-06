import classes from './PrimaryButton.module.css';

function PrimaryButton(props) {
  return (
    <button className={classes.primaryButton} onClick={props.onClick}>
      {props.buttonTitle}
    </button>
  );
}

export default PrimaryButton;
