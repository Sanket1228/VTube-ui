import { IServerResponse } from "../types/ServerResponse";
import { getInstance } from "./config";
import { RequestConfig } from "./types/RequestConfig";

const http = getInstance();

const get = async <TResponse, TParams = unknown>(
  url: string,
  config?: RequestConfig,
  params?: TParams
): Promise<IServerResponse<TResponse>> =>
  http.get<TResponse>(url, { ...config, params });

const post = async <TRequest, TResponse>(
  url: string,
  payload?: TRequest,
  config?: RequestConfig
): Promise<IServerResponse<TResponse>> =>
  http.post<TResponse>(url, payload, config);

const put = async <TRequest, TResponse>(
  url: string,
  payload?: TRequest,
  config?: RequestConfig
): Promise<IServerResponse<TResponse>> =>
  http.put<TResponse>(url, payload, config);

const patch = async <TRequest, TResponse>(
  url: string,
  payload?: TRequest,
  config?: RequestConfig
): Promise<IServerResponse<TResponse>> =>
  http.patch<TResponse>(url, payload, config);

const remove = async <TResponse, TParams = unknown>(
  url: string,
  config?: RequestConfig,
  params?: TParams
): Promise<IServerResponse<TResponse>> =>
  http.delete<TResponse>(url, { ...config, params });

export { get, patch, post, put, remove };
