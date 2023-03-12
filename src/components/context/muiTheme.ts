import { createTheme, colors } from "@mui/material";

export const muiDarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: colors.green[300],
    },
    secondary: {
      main: colors.amber[400],
    },
  },
});
export const muiLightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colors.green[700],
    },
    secondary: {
      main: colors.amber[400],
    },
  },
});
