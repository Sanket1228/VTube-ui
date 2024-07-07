import { RouteObject } from "react-router-dom";

interface FeatureRouteProps {
  type: "public" | "private";
}

export type FeatureRouteObject = RouteObject & FeatureRouteProps;
