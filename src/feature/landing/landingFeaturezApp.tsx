import { IFeatureApp } from "../../common/types/FeatureApp";
import { landingReducer } from "./redux/reducers";
import { LandingState } from "./redux/types";
import { getRoutes } from "./routes";

export const landingFeatureApp: IFeatureApp<LandingState> = {
  appName: "landing",
  reducer: landingReducer,
  getRoutes,
};
