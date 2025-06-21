import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../../../../redux";

export type AuthorizedProps = {
  children: JSX.Element;
};

export const Authorized = ({ children }: AuthorizedProps) => {
  const token = useSelector(
    (state: RootState) => state.auth.login.api.data?.accessToken
  );

  if (!token) {
    return <Navigate to="/auth/login" />;
  }

  return <>{children}</>;
};
