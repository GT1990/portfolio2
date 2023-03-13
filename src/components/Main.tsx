import Nav from "./Nav";
import CallToAction from "./CallToAction";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./context/ThemeContext";

import { Paper, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { muiDarkTheme, muiLightTheme } from "./context/muiTheme";
import AnimatedBackground from "./AnimatedBackground";
import MobileNav from "../components/MobileNav";

const Main = () => {
  const { theme } = useContext(ThemeContext);
  let isMobile = window.innerWidth <= 850;
  let navigationMenu = isMobile ? <MobileNav /> : <Nav />;

  useEffect(() => {
    let metaTheme = document.querySelector('meta[name="theme-color"]');
    if (theme === "dark" && metaTheme !== null) {
      metaTheme.setAttribute("content", "#000");
    } else if (theme === "light" && metaTheme !== null) {
      metaTheme.setAttribute("content", "#FFF");
    }
  }, [theme]);

  return (
    <MuiThemeProvider theme={theme === "dark" ? muiDarkTheme : muiLightTheme}>
      <Paper>
        <AnimatedBackground />
        {navigationMenu}
        <CallToAction />
      </Paper>
    </MuiThemeProvider>
  );
};

export default Main;
