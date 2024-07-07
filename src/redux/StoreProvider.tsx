import { Action, Store, UnknownAction } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

export type StoreProviderProps<
  A extends Action = UnknownAction,
  S = unknown
> = {
  children: React.ReactNode;
  store: Store<S, A>;
};

export const StoreProvider = ({ children, store }: StoreProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};
