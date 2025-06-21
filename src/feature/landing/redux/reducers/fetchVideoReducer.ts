import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VideosData } from "../../api/AllVideos/VideosData";
import { FetchVideoState } from "../types/FetchVideoState";

const initialState: FetchVideoState = {
  ui: {},
  api: {
    apiState: "initial",
    data: undefined,
    error: undefined,
  },
};

export const fetchVideoSlice = createSlice({
  name: "landing/fetch-videos",
  initialState,
  reducers: {
    fetchVideoRequest(state) {
      state.api.apiState = "loading";
    },
    fetchVideoSuccess(state, action: PayloadAction<VideosData>) {
      state.api.apiState = "loaded";
      state.api.data = action.payload;
      state.api.error = undefined;
    },
    fetchVideoFailed(state, action: PayloadAction<string>) {
      state.api.apiState = "error";
      state.api.data = undefined;
      state.api.error = action.payload;
    },
  },
});

export const { fetchVideoRequest, fetchVideoSuccess, fetchVideoFailed } =
  fetchVideoSlice.actions;

export const fetchVideoReducer = fetchVideoSlice.reducer;
