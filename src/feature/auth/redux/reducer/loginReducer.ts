import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const loginSlice = createSlice({
  name: "auth/login",
  initialState,
  reducers: {},
});

export const {} = loginSlice.actions;

export const loginReducer = loginSlice.reducer;
