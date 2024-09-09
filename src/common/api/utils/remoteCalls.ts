import { getAuthToken } from "../../utils/getAuthToken";
import { RequestConfig } from "../types/RequestConfig";

export function createCorsConfigFileUpload(): RequestConfig {
  return {
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
      "Access-Control-Max-Age": "1000",
      "Access-Control-Allow-Headers":
        "x-requested-with, Content-Type, origin, authorization, accept, client-security-token",
    },
  };
}

export function createCorsConfigFileDownload(): RequestConfig {
  return {
    headers: createCorsConfigFileUpload().headers,
    responseType: "blob",
  };
}

export function createCorsConfig(): RequestConfig {
  return {
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
      "Access-Control-Max-Age": "1000",
      "Access-Control-Allow-Headers":
        "x-requested-with, Content-Type, origin, authorization, accept, client-security-token",
    },
  };
}
