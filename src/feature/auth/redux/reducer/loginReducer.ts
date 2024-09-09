import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginData } from "../../api/types/Login/LoginData";
import { LoginState } from "../types/LoginState";

const initialState: LoginState = {
  ui: {},
  api: {
    apiState: "initial",
    data: undefined,
    error: undefined,
  },
};

export const loginSlice = createSlice({
  name: "auth/login",
  initialState,
  reducers: {
    loginRequest(state) {
      state.api.apiState = "loading";
    },
    loginSuccess(state, action: PayloadAction<LoginData>) {
      state.api.apiState = "loaded";
      state.api.data = action.payload;
      state.api.error = undefined;
      localStorage.setItem("token", action.payload.accessToken);
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.api.apiState = "error";
      state.api.data = undefined;
      state.api.error = action.payload;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailed } = loginSlice.actions;

export const loginReducer = loginSlice.reducer;
