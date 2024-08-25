import * as client from "../../../common";
import { ApiResponse, IServerResponse } from "../../../common";
import { LoginData } from "./types/Login/LoginData";
import { LoginRequest } from "./types/Login/LoginRequest";
import { SignUpRequest } from "./types/SignUp/SignUpRequest";
import { SignUpResponse } from "./types/SignUp/SignUpResponse";

export function signUp(
  data: SignUpRequest
): Promise<ApiResponse<SignUpResponse, any>> {
  const url = `http://localhost:8000/api/v1/users/register`;
  return client.post<SignUpRequest, IServerResponse<SignUpResponse>>(url, data);
}

export function login(
  data: LoginRequest
): Promise<ApiResponse<LoginData, any>> {
  const url = `http://localhost:8000/api/v1/users/login`;
  return client.post<LoginRequest, IServerResponse<LoginData>>(url, data);
}
