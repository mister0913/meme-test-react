import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    background: {
      default: "#fff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          width: 1,
        }}
      >
        <Header />
        <Box
          component="main"
          display="flex"
          justifyContent="center"
          width={1}
          sx={{ flexGrow: 1 }}
        >
          <Home />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
