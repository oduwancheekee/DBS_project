import classes from './FooterSection.module.css';

function FooterSection(props) {
  return (
    <div className={classes.footerBox}>
      <p className={classes.footerText}>
        Database Systems 10th assignment: Ivan Timofeev | Meri Sukiasyan | Dea
        Karam | Konstantinos Kokkalis
      </p>
    </div>
  );
}

export default FooterSection;
