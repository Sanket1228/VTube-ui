import {
  Action,
  Dispatch,
  ThunkAction,
  ThunkDispatch,
  UnknownAction,
} from "@reduxjs/toolkit";
import { AuthState } from "./AuthState";

export type AuthDispatch = ThunkDispatch<AuthState, undefined, UnknownAction> &
  Dispatch<UnknownAction>;

export type AuthThunk = ThunkAction<void, AuthState, null, Action<string>>;
