import * as api from "../../api/fetchAllVideoApi";
import {
  fetchVideoFailed,
  fetchVideoRequest,
  fetchVideoSuccess,
} from "../reducers/fetchVideoReducer";
import { LandingDispatch } from "../types/LandingDispatch";

export const fetchAllVideos = () => async (dispatch: LandingDispatch) => {
  try {
    dispatch(fetchVideoRequest());
    await api
      .fetchAllVideos()
      .then((response) => dispatch(fetchVideoSuccess(response.data.data)))
      .catch((error) => dispatch(fetchVideoFailed(error)));
  } catch (error) {
    dispatch(fetchVideoFailed("something went wrong while signing up"));
  }
};
