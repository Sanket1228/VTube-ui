import { UploadVideoData } from "./UploadVideoData";

export interface UploadVideoResponse {
  statusCode: number;
  data: UploadVideoData;
  message: string;
  success: boolean;
}
