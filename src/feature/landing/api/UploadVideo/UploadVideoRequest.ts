export interface UploadVideoRequest {
  video?: File;
  thumbnail?: File;
  title?: string;
  description?: string;
  userId?: string;
}
