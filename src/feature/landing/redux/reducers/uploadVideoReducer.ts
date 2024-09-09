import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UploadVideoData } from "../../api/UploadVideo/UploadVideoData";
import { UploadVideoState } from "../types/UploadVideoState";

const initialState: UploadVideoState = {
  ui: {},
  api: {
    apiState: "initial",
    data: undefined,
    error: undefined,
  },
};

export const uploadVideoSlice = createSlice({
  name: "landing/upload-video",
  initialState,
  reducers: {
    uploadVideoRequest(state) {
      state.api.apiState = "loading";
    },
    uploadVideoSuccess(state, action: PayloadAction<UploadVideoData>) {
      state.api.apiState = "loaded";
      state.api.data = action.payload;
      state.api.error = undefined;
    },
    uploadVideoFailed(state, action: PayloadAction<string>) {
      state.api.apiState = "error";
      state.api.data = undefined;
      state.api.error = action.payload;
    },
  },
});

export const { uploadVideoRequest, uploadVideoSuccess, uploadVideoFailed } =
  uploadVideoSlice.actions;

export const uploadVideoReducer = uploadVideoSlice.reducer;
