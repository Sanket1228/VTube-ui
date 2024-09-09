import {
  Action,
  Dispatch,
  ThunkAction,
  ThunkDispatch,
  UnknownAction,
} from "@reduxjs/toolkit";
import { LandingState } from "./LandingState";

export type LandingDispatch = ThunkDispatch<
  LandingState,
  undefined,
  UnknownAction
> &
  Dispatch<UnknownAction>;

export type LandingThunk = ThunkAction<
  void,
  LandingState,
  null,
  Action<string>
>;
