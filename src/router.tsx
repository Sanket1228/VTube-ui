import { createBrowserRouter } from "react-router-dom";
import { authFeatureApp } from "./feature/auth/authFeatureApp";
import { HomePage, LandingPage, UploaderPage } from "./feature/landing";

export const getAppRouter = () => {
  const authRoutes = authFeatureApp.getRoutes();
  return createBrowserRouter([
    ...authRoutes.filter((route) => route.type === "public"),
    {
      path: "/",
      element: <LandingPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/home",
          element: <HomePage />,
        },
        {
          path: "/upload",
          element: <UploaderPage />,
        },
      ],
    },
  ]);
};
