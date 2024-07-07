import { Action, ThunkAction } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer/rootReducer";
import { getStoreApi } from "./storeUtils";
import { RootState } from "./types/RootState";

const { getStore } = getStoreApi();

export const store = getStore(rootReducer);

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
