import { combineSlices } from "@reduxjs/toolkit";
import { authReducer } from "../../feature";

export const rootReducer = combineSlices({
  auth: authReducer,
});
