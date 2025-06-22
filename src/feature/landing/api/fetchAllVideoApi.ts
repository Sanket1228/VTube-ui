import * as client from "../../../common";
import { ApiResponse, IServerResponse } from "../../../common";
import { createCorsConfig } from "../../../common/api/utils/remoteCalls";
import { VideosData } from "./AllVideos/VideosData";

export function fetchAllVideos(): Promise<ApiResponse<VideosData, any>> {
  const url = `${process.env.REACT_APP_DEPLOYED_URL}/video/all`;
  return client.get<IServerResponse<VideosData>>(url, createCorsConfig());
}
