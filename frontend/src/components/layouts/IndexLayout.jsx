import FooterSection from './FooterSection';
import classes from './IndexLayout.module.css';
import TitleSection from './TitleSection';

function IndexLayout(props) {
  return (
    <div className={classes.fullContent}>
      <div className={classes.titleSection}>
        <TitleSection />
      </div>
      <div className={classes.mainContentSection}>{props.children}</div>
      <div className={classes.footerSection}>
        <FooterSection />
      </div>
    </div>
  );
}

export default IndexLayout;
