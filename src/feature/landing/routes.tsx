import { FeatureRouteObject } from "../../common/types/FeatureRouteObject";
import { HomePage, LandingPage, UploaderPage } from "./pages";
import { OwnVideosPage } from "./pages/OwnVideosPage";

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
      {
        path: "/my-videos",
        element: <OwnVideosPage />,
      },
    ],
  },
];

export const getRoutes = (): FeatureRouteObject[] => routes;
