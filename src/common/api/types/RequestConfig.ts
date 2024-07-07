import { AxiosProgressEvent, ResponseType, responseEncoding } from "axios";

export type HttpHeaders = {
  [key: string]: string | boolean;
};

export type RequestConfig = {
  headers?: HttpHeaders;
  responseType?: ResponseType;
  responseEncoding?: responseEncoding;
  xsrfCookieName?: string;
  xsrfHeaderName?: string;
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void;
  onDownloadProgress?: (progressEvent: AxiosProgressEvent) => void;
  maxContentLength?: number;
};
