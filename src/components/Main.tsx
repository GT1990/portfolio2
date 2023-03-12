import Nav from "./Nav";
import CallToAction from "./CallToAction";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

import { Paper, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { muiDarkTheme, muiLightTheme } from "./context/muiTheme";
import AnimatedBackground from "./AnimatedBackground";

const Main = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <MuiThemeProvider theme={theme === "dark" ? muiDarkTheme : muiLightTheme}>
      <Paper>
        <AnimatedBackground />
        <Nav />
        <CallToAction />
      </Paper>
    </MuiThemeProvider>
  );
};

export default Main;
