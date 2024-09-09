import { Reducer, ReducersMapObject, combineSlices } from "@reduxjs/toolkit";
import { LandingState } from "../types";
import { uploadVideoReducer } from "./uploadVideoReducer";

export const landingReducerMap: ReducersMapObject<LandingState> = {
  uploadVideo: uploadVideoReducer,
};

export const landingReducer: Reducer<LandingState> =
  combineSlices(landingReducerMap);
