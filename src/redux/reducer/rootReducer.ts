import { combineSlices } from "@reduxjs/toolkit";
import { authFeatureApp } from "../../feature/auth/authFeatureApp";

export const rootReducer = combineSlices({
  auth: authFeatureApp.reducer,
});
