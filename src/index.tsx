import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { defaultTheme } from "./common/theme/defaultTheme";
import { AppTheme } from "./common/theme/types/AppTheme";
import { StoreProvider, store } from "./redux";
import { globalStyle } from "./style/global.styled";

// dotenv.config({
//   path: "./.env",
// });

declare module "@mui/material/styles" {
  export interface Theme extends AppTheme {}
  // allow configuration using `createTheme`
  export interface ThemeOptions extends AppTheme {}
}

const root = ReactDOM.createRoot(
  // document.getElementById("root") as HTMLElement
  document.querySelector("#root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      {globalStyle}
      <CssBaseline />
      <StoreProvider store={store}>
        <App />
      </StoreProvider>
    </ThemeProvider>
  </React.StrictMode>
);
