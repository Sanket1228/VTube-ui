import { ApiState } from "../../../../common";
import { LoginData } from "../../api/types/Login/LoginData";

export type LoginState = {
  ui: {};
  api: ApiState<LoginData>;
};
