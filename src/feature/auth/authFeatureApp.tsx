import { IFeatureApp } from "../../common/types/FeatureApp";
import { authReducer } from "./redux/reducer";
import { getRoutes } from "./routes";

export const authFeatureApp: IFeatureApp = {
  appName: "auth",
  reducer: authReducer,
  getRoutes,
};
