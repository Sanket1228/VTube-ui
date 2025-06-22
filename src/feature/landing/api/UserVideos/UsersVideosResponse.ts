import { VideosData } from "./VideosData";

export interface AllVideoResponse {
  statusCode: number;
  data: VideosData;
  message: string;
  success: boolean;
}
