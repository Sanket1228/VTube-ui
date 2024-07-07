import { Reducer, ReducersMapObject, combineSlices } from "@reduxjs/toolkit";
import { AuthState } from "../types/AuthState";
import { loginReducer } from "./loginReducer";

export const authReducerMap: ReducersMapObject<AuthState> = {
  login: loginReducer,
};

export const authReducer: Reducer = combineSlices(authReducerMap);
