import { styled } from "@mui/material";

export const AuthBackground = styled("div", { name: "AuthBg" })(
  ({ theme }) => ({
    width: "100%",
    height: "100vh",
    position: "fixed",
    top: "0",
    background: theme.app.bg,
  })
);
