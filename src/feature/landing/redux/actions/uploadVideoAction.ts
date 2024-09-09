import { UploadVideoRequest } from "../../api/UploadVideo/UploadVideoRequest";
import * as api from "../../api/uploadVideoApi";
import {
  uploadVideoFailed,
  uploadVideoRequest,
  uploadVideoSuccess,
} from "../reducers/uploadVideoReducer";
import { LandingDispatch } from "../types/LandingDispatch";

export const uploadVideo =
  (data: UploadVideoRequest) => async (dispatch: LandingDispatch) => {
    try {
      dispatch(uploadVideoRequest());
      await api
        .uploadVideo(data)
        .then((response) => dispatch(uploadVideoSuccess(response.data.data)))
        .catch((error) => dispatch(uploadVideoFailed(error)));
    } catch (error) {
      dispatch(uploadVideoFailed("something went wrong while signing up"));
    }
  };
