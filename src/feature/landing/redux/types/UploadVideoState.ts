import { ApiState } from "../../../../common";
import { UploadVideoData } from "../../api/UploadVideo/UploadVideoData";

export type UploadVideoState = {
  ui: {};
  api: ApiState<UploadVideoData>;
};
