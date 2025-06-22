import * as client from "../../../common";
import { ApiResponse, IServerResponse } from "../../../common";
import { createCorsConfig } from "../../../common/api/utils/remoteCalls";
import { VideosData } from "./UserVideos/VideosData";

export function fetchUsersVideos(): Promise<ApiResponse<VideosData, any>> {
  const url = `http://localhost:8000/api/v1/video/mine`;
  return client.get<IServerResponse<VideosData>>(url, createCorsConfig());
}
