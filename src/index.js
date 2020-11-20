import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#FFFFFF"
      }
    }
  },
  palette: {
    primary: {
      main: "#967ADC",
      light: "#AC92EC",
      dark: "#967ADC",
      contrastText: "#FFFFFF"
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF"
    }
  },
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(",")
  }
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);
