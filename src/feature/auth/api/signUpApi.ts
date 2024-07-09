import * as client from "../../../common";
import { ApiResponse, IServerResponse, getLocalUrl } from "../../../common";
import { SignUpRequest } from "./types/SignUp/SignUpRequest";
import { SignUpResponse } from "./types/SignUp/SignUpResponse";

export function signUp(): Promise<ApiResponse<SignUpResponse, any>> {
  const url = `${getLocalUrl()}/users/register`;
  return client.post<SignUpRequest, IServerResponse<SignUpResponse>>(url);
}
