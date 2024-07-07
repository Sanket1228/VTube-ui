import { Reducer } from "@reduxjs/toolkit";
import { FeatureRouteObject } from "./FeatureRouteObject";

export interface IFeatureApp {
  appName: string;
  reducer: Reducer;
  getRoutes: () => FeatureRouteObject[];
}
