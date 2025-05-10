import { createTheme } from "@mui/material/styles";

const tema = createTheme({
  palette: {
    primary: {
      main: "#374151", 
      contrastText: "#fff",
    },
    secondary: {
      main: "#6B7280", 
      contrastText: "#fff",
    },
    background: {
      default: "#F3F4F6", 
      paper: "#fff",
    },
    accent: {
      main: "#A7C7E7", 
    },
    text: {
      primary: "#22223B",
      secondary: "#6B7280",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
  },
});

export default tema;
