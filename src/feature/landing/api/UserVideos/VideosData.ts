import { Video } from "./Video";

export interface VideosData {
  currentPage: number;
  pageSize: number;
  total: number;
  videos: Video[];
}
