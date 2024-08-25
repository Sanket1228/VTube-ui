import { IFeatureApp } from "../../common/types/FeatureApp";
import { authReducer } from "./redux/reducer";
import { AuthState } from "./redux/types";
import { getRoutes } from "./routes";

export const authFeatureApp: IFeatureApp<AuthState> = {
  appName: "auth",
  reducer: authReducer,
  getRoutes,
};
