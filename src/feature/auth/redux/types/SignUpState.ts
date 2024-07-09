import { ApiState } from "../../../../common";
import { SignUpResponse } from "../../api/types/SignUp/SignUpResponse";

export type SignUpState = {
  ui: {};
  api: ApiState<SignUpResponse>;
};
