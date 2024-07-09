import * as api from "../../api/signUpApi";
import {
  signUpFailed,
  signUpRequest,
  signUpSuccess,
} from "../reducer/signUpReducer";
import { AuthDispatch } from "../types/AuthDispatch";

export const signUp = () => async (dispatch: AuthDispatch) => {
  try {
    dispatch(signUpRequest());
    await api
      .signUp()
      .then((response) => dispatch(signUpSuccess(response.data.data)))
      .catch((error) => dispatch(signUpFailed(error)));
  } catch (error) {
    dispatch(signUpFailed("something went wrong while signing up"));
  }
};
