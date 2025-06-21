import { Reducer, ReducersMapObject, combineSlices } from "@reduxjs/toolkit";
import { LandingState } from "../types";
import { fetchVideoReducer } from "./fetchVideoReducer";
import { uploadVideoReducer } from "./uploadVideoReducer";

export const landingReducerMap: ReducersMapObject<LandingState> = {
  uploadVideo: uploadVideoReducer,
  fetchVideos: fetchVideoReducer,
};

export const landingReducer: Reducer<LandingState> =
  combineSlices(landingReducerMap);
