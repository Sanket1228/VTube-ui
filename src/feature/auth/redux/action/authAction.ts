import * as api from "../../api/authApi";
import { LoginRequest } from "../../api/types/Login/LoginRequest";
import { SignUpRequest } from "../../api/types/SignUp/SignUpRequest";
import {
  loginFailed,
  loginRequest,
  loginSuccess,
} from "../reducer/loginReducer";
import {
  signUpFailed,
  signUpRequest,
  signUpSuccess,
} from "../reducer/signUpReducer";
import { AuthDispatch } from "../types/AuthDispatch";

export const signUp =
  (data: SignUpRequest) => async (dispatch: AuthDispatch) => {
    try {
      dispatch(signUpRequest());
      await api
        .signUp(data)
        .then((response) => dispatch(signUpSuccess(response.data.data)))
        .catch((error) => dispatch(signUpFailed(error)));
    } catch (error) {
      dispatch(signUpFailed("something went wrong while signing up"));
    }
  };

export const login = (data: LoginRequest) => async (dispatch: AuthDispatch) => {
  try {
    dispatch(loginRequest());
    await api
      .login(data)
      .then((response) => dispatch(loginSuccess(response.data.data)))
      .catch((error) => dispatch(loginFailed(error)));
  } catch (error) {
    dispatch(loginFailed("something went wrong while signing up"));
  }
};
