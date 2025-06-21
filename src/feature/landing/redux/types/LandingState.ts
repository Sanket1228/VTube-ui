import { FetchVideoState } from "./FetchVideoState";
import { UploadVideoState } from "./UploadVideoState";

export type LandingState = {
  uploadVideo: UploadVideoState;
  fetchVideos: FetchVideoState;
};
