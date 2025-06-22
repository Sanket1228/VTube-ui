import * as api from "../../api/fetchAllVideoApi";
import * as userApi from "../../api/fetchUsersVideoApi";
import {
  fetchUserVideoFailed,
  fetchUserVideoRequest,
  fetchUserVideoSuccess,
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

export const fetchUserVideos = () => async (dispatch: LandingDispatch) => {
  try {
    dispatch(fetchUserVideoRequest());
    await userApi
      .fetchUsersVideos()
      .then((response) => dispatch(fetchUserVideoSuccess(response.data.data)))
      .catch((error) => dispatch(fetchUserVideoFailed(error)));
  } catch (error) {
    dispatch(fetchUserVideoFailed("something went wrong while signing up"));
  }
};
