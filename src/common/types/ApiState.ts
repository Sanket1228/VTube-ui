import { ApiLoadState } from "./ApiLoadState";

export interface ApiState<T> {
  apiState: ApiLoadState;
  data?: T;
  error?: string;
}
