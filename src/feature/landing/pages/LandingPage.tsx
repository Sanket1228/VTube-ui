import { Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import { Outlet } from "react-router-dom";
import { Authorized } from "../components/Authorized/Authorized";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";

const defaultTheme = createTheme();

export const LandingPage = () => {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Authorized>
      <ThemeProvider theme={defaultTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Header open={open} toggleDrawer={toggleDrawer} />
          <Sidebar open={open} toggleDrawer={toggleDrawer} />
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Outlet />
            </Container>
            <Box
              sx={{
                position: "fixed",
                bottom: 0,
                right: 0,
                width: "100%",
                backgroundColor: "#f5f5f5",
                px: 2,
                py: 1,
                textAlign: "right",
              }}
            >
              <Footer />
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </Authorized>
  );
};
