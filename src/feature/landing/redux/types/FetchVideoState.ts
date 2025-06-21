import { ApiState } from "../../../../common";
import { VideosData } from "../../api/AllVideos/VideosData";

export type FetchVideoState = {
  ui: {};
  api: ApiState<VideosData>;
};
