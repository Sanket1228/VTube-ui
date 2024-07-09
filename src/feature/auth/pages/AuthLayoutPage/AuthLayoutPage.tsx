import { Outlet } from "react-router-dom";
import { AuthBackground } from "./AuthLayoutPage.styled";

export const AuthLayoutPage = () => {
  return (
    <AuthBackground>
      <Outlet />
    </AuthBackground>
  );
};
