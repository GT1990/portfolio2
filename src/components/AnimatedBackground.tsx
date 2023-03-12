import styles from "../css/animatedBackground.module.css";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { DataObject } from "@mui/icons-material";

const AnimatedBackground = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === "dark" ? styles.areaDark : styles.areaLight}>
      <ul className={styles.circles}>
        <DataObject className={styles.codeIcon} />
        <DataObject className={styles.codeIcon} />
        <DataObject className={styles.codeIcon} />
        <DataObject className={styles.codeIcon} />
        <DataObject className={styles.codeIcon} />
        <DataObject className={styles.codeIcon} />
        <DataObject className={styles.codeIcon} />
        <DataObject className={styles.codeIcon} />
        <DataObject className={styles.codeIcon} />
        <DataObject className={styles.codeIcon} />
        <DataObject className={styles.codeIcon} />
        <DataObject className={styles.codeIcon} />
        <DataObject className={styles.codeIcon} />
        <DataObject className={styles.codeIcon} />
        <DataObject className={styles.codeIcon} />
        <DataObject className={styles.codeIcon} />
      </ul>
    </div>
  );
};

export default AnimatedBackground;
