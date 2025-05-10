import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, CssBaseline } from "@mui/material";
import tema from "./Tema/Tema";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={tema}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
