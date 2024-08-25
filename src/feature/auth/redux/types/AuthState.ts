import { LoginState } from "./LoginState";
import { SignUpState } from "./SignUpState";

export type AuthState = {
  login: LoginState;
  signUp: SignUpState;
};
