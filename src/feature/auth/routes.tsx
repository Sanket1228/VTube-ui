import { FeatureRouteObject } from "../../common/types/FeatureRouteObject";
import { LoginPage } from "./pages";

const routes: FeatureRouteObject[] = [
  {
    type: "public",
    path: "/auth",
    element: <LoginPage />,
  },
];

export const getRoutes = (): FeatureRouteObject[] => routes;
