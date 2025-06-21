import { Outlet } from "react-router-dom";
import { AuthBackground } from "./AuthLayoutPage.styled";

export const AuthLayoutPage = () => {
  return (
    <AuthBackground
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right, #141e30, #243b55)",
      }}
    >
      <Outlet />
    </AuthBackground>
  );
};
