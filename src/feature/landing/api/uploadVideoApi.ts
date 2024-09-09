import * as client from "../../../common";
import { ApiResponse, IServerResponse } from "../../../common";
import { createCorsConfig } from "../../../common/api/utils/remoteCalls";
import { UploadVideoData } from "./UploadVideo/UploadVideoData";
import { UploadVideoRequest } from "./UploadVideo/UploadVideoRequest";

export function uploadVideo(
  data: UploadVideoRequest
): Promise<ApiResponse<UploadVideoData, any>> {
  const url = `http://localhost:8000/api/v1/video/upload-video`;
  return client.post<UploadVideoRequest, IServerResponse<UploadVideoData>>(
    url,
    data,
    createCorsConfig()
  );
}
