import { combineSlices } from "@reduxjs/toolkit";
import { authFeatureApp } from "../../feature/auth/authFeatureApp";
import { landingFeatureApp } from "../../feature/landing/landingFeaturezApp";

export const rootReducer = combineSlices({
  auth: authFeatureApp.reducer,
  landing: landingFeatureApp.reducer,
});
