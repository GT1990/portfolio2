import styles from "../css/animatedBackground.module.css";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { DataObject } from "@mui/icons-material";

const AnimatedBackground = () => {
  const { theme } = useContext(ThemeContext);
  let dataObjects = [];
  for (let i = 0; i < 16; i++) {
    dataObjects.push(<DataObject className={styles.codeIcon} />);
  }
  return (
    <div className={theme === "dark" ? styles.areaDark : styles.areaLight}>
      <ul className={styles.circles}>{dataObjects}</ul>
    </div>
  );
};

export default AnimatedBackground;
