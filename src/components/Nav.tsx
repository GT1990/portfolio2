import logo from "../img/AiLogo.png";
import styles from "../css/nav.module.css";
import { IconButton, Tooltip, colors } from "@mui/material";
import {
  LinkedIn,
  GitHub,
  YouTube,
  Article,
  Code,
  DarkMode,
  LightMode,
  Devices,
} from "@mui/icons-material";

import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const Settings = () => {
  const { theme, toogleTheme } = useContext(ThemeContext);

  return (
    <>
      <span
        className={theme === "dark" ? styles.vlDark : styles.vlLight}
      ></span>
      {theme === "dark" ? (
        <Tooltip title="Light mode" arrow>
          <span className={styles.link}>
            <IconButton onClick={() => toogleTheme()}>
              <LightMode sx={{ color: colors.amber[300] }} />
            </IconButton>
          </span>
        </Tooltip>
      ) : (
        <Tooltip title="Dark mode" arrow>
          <span className={styles.link}>
            <IconButton onClick={() => toogleTheme()}>
              <DarkMode sx={{ color: colors.blue[700] }} />
            </IconButton>
          </span>
        </Tooltip>
      )}
    </>
  );
};
const Links = () => {
  const { theme } = useContext(ThemeContext);
  const iconColor = { color: theme === "light" ? "black" : "white" };
  return (
    <div className={styles.linksWrapper}>
      <Tooltip title="Skills" arrow>
        <a
          href="https://gt1990.github.io/"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.link}
        >
          <IconButton>
            <Code sx={iconColor} />
          </IconButton>
        </a>
      </Tooltip>
      <Tooltip title="Projects" arrow>
        <a
          href="https://gt1990.github.io/"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.link}
        >
          <IconButton>
            <Devices sx={iconColor} />
          </IconButton>
        </a>
      </Tooltip>
      <Tooltip title="LinkedIn" arrow>
        <a
          href="https://www.linkedin.com/in/aigt1990/"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.link}
        >
          <IconButton>
            <LinkedIn sx={iconColor} />
          </IconButton>
        </a>
      </Tooltip>
      <Tooltip title="GitHub" arrow>
        <a
          href="https://github.com/GT1990"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.link}
        >
          <IconButton>
            <GitHub sx={iconColor} />
          </IconButton>
        </a>
      </Tooltip>
      <Tooltip title="YouTube" arrow>
        <a
          href="https://gt1990.github.io/"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.link}
        >
          <IconButton>
            <YouTube sx={iconColor} />
          </IconButton>
        </a>
      </Tooltip>
      <Tooltip title="Resume" arrow>
        <a
          href="https://gt1990.github.io/"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.link}
        >
          <IconButton>
            <Article sx={iconColor} />
          </IconButton>
        </a>
      </Tooltip>
      <Settings />
    </div>
  );
};

const Nav = () => {
  return (
    <div className={styles.navWrapper}>
      <div className={styles.logoWrapper}>
        <img src={logo} className={styles.logo} alt="Ahmad Intelligence logo" />
      </div>
      <Links />
    </div>
  );
};

export default Nav;
