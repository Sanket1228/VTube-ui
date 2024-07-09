import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SignUpResponse } from "../../api/types/SignUp/SignUpResponse";
import { SignUpState } from "../types/SignUpState";

const initialState: SignUpState = {
  ui: {},
  api: {
    apiState: "initial",
    data: undefined,
    error: undefined,
  },
};

export const signUpSlice = createSlice({
  name: "auth/signUp",
  initialState,
  reducers: {
    signUpRequest(state) {
      state.api.apiState = "loading";
    },
    signUpSuccess(state, action: PayloadAction<SignUpResponse>) {
      state.api.apiState = "loaded";
      state.api.data = action.payload;
      state.api.error = undefined;
    },
    signUpFailed(state, action: PayloadAction<string>) {
      state.api.apiState = "error";
      state.api.data = undefined;
      state.api.error = action.payload;
    },
  },
});

export const { signUpRequest, signUpSuccess, signUpFailed } =
  signUpSlice.actions;

export const signUpReducer = signUpSlice.reducer;
