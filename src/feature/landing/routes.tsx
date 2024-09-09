import { FeatureRouteObject } from "../../common/types/FeatureRouteObject";
import { HomePage, LandingPage, UploaderPage } from "./pages";

const routes: FeatureRouteObject[] = [
  {
    type: "private",
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
];

export const getRoutes = (): FeatureRouteObject[] => routes;
