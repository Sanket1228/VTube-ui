import { SignUpData } from "./SignUpData";

export type SignUpResponse = {
  statusCode: number;
  data: SignUpData;
  message: string;
  success: boolean;
};
