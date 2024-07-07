import { Reducer, configureStore } from "@reduxjs/toolkit";

export function getStoreApi() {
  const getStore = (reducer: Reducer) => {
    return configureStore({
      reducer,
      devTools: true,
    });
  };

  return { getStore };
}
