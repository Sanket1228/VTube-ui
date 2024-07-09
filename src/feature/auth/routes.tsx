import { FeatureRouteObject } from "../../common/types/FeatureRouteObject";
import { AuthLayoutPage, LoginPage, SignUpPage } from "./pages";

const routes: FeatureRouteObject[] = [
  {
    type: "public",
    path: "/auth",
    element: <AuthLayoutPage />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "/auth/login",
        element: <LoginPage />,
      },
      {
        path: "/auth/signup",
        element: <SignUpPage />,
      },
    ],
  },
];

export const getRoutes = (): FeatureRouteObject[] => routes;
