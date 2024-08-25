import { Reducer } from "@reduxjs/toolkit";
import { FeatureRouteObject } from "./FeatureRouteObject";

export interface IFeatureApp<IFeatureAppState> {
  appName: string;
  reducer: Reducer<IFeatureAppState>;
  getRoutes: () => FeatureRouteObject[];
}
