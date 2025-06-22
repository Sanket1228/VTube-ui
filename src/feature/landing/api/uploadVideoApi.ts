import * as client from "../../../common";
import { ApiResponse, IServerResponse } from "../../../common";
import { createCorsConfig } from "../../../common/api/utils/remoteCalls";
import { UploadVideoData } from "./UploadVideo/UploadVideoData";
import { UploadVideoRequest } from "./UploadVideo/UploadVideoRequest";

export function uploadVideo(
  data: UploadVideoRequest
): Promise<ApiResponse<UploadVideoData, any>> {
  const url = `${process.env.REACT_APP_DEPLOYED_URL}/video/upload-video`;
  return client.post<UploadVideoRequest, IServerResponse<UploadVideoData>>(
    url,
    data,
    createCorsConfig()
  );
}
