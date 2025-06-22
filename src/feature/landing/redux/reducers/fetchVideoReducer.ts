import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VideosData } from "../../api/AllVideos/VideosData";
import { FetchVideoState } from "../types/FetchVideoState";

const initialState: FetchVideoState = {
  ui: {},
  api: {
    all: { apiState: "initial", data: undefined, error: undefined },
    user: { apiState: "initial", data: undefined, error: undefined },
  },
};

export const fetchVideoSlice = createSlice({
  name: "landing/fetch-videos",
  initialState,
  reducers: {
    fetchVideoRequest(state) {
      state.api.all.apiState = "loading";
    },
    fetchVideoSuccess(state, action: PayloadAction<VideosData>) {
      state.api.all.apiState = "loaded";
      state.api.all.data = action.payload;
      state.api.all.error = undefined;
    },
    fetchVideoFailed(state, action: PayloadAction<string>) {
      state.api.all.apiState = "error";
      state.api.all.data = undefined;
      state.api.all.error = action.payload;
    },

    fetchUserVideoRequest(state) {
      state.api.user.apiState = "loading";
    },
    fetchUserVideoSuccess(state, action: PayloadAction<VideosData>) {
      state.api.user.apiState = "loaded";
      state.api.user.data = action.payload;
      state.api.user.error = undefined;
    },
    fetchUserVideoFailed(state, action: PayloadAction<string>) {
      state.api.user.apiState = "error";
      state.api.user.data = undefined;
      state.api.user.error = action.payload;
    },
  },
});

export const {
  fetchVideoRequest,
  fetchVideoSuccess,
  fetchVideoFailed,
  fetchUserVideoFailed,
  fetchUserVideoRequest,
  fetchUserVideoSuccess,
} = fetchVideoSlice.actions;

export const fetchVideoReducer = fetchVideoSlice.reducer;
