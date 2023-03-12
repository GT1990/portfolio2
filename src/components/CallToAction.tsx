import styles from "../css/callToAction.module.css";
import me from "../img/MeYellow.png";
import { Button, Typography } from "@mui/material";

const CallToAction = () => {
  return (
    <div className={styles.main}>
      <div className={styles.ctaWrapper}>
        <Typography variant="h1">Ahmad Ibrahim</Typography>
        <Typography variant="h3">Full Stack Software Engineer</Typography>
        <div className={styles.buttonsContainer}>
          <Button
            className={styles.button}
            variant="contained"
            color="secondary"
          >
            Projects
          </Button>
          <Button className={styles.button} variant="contained">
            Skills
          </Button>
        </div>
      </div>
      <img className={styles.img} src={me} alt="Ahmad Ibrahim" />
    </div>
  );
};

export default CallToAction;
