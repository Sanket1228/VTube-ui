import { Reducer, ReducersMapObject, combineSlices } from "@reduxjs/toolkit";
import { AuthState } from "../types/AuthState";
import { loginReducer } from "./loginReducer";
import { signUpReducer } from "./signUpReducer";

export const authReducerMap: ReducersMapObject<AuthState> = {
  login: loginReducer,
  signUp: signUpReducer,
};

export const authReducer: Reducer<AuthState> = combineSlices(authReducerMap);
