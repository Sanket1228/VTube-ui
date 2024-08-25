import { LoginData } from "./LoginData";

export interface LoginResponse {
  statusCode: number;
  data: LoginData;
  message: string;
  success: boolean;
}
