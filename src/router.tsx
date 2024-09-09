import { createBrowserRouter } from "react-router-dom";
import { authFeatureApp } from "./feature/auth/authFeatureApp";
import { landingFeatureApp } from "./feature/landing/landingFeaturezApp";

export const getAppRouter = () => {
  const authRoutes = authFeatureApp.getRoutes();
  const landingRoutes = landingFeatureApp.getRoutes();

  return createBrowserRouter([
    ...authRoutes.filter((route) => route.type === "public"),
    ...landingRoutes.filter((route) => route.type === "private"),
  ]);
};
