export interface LoginData {
  user: User;
  accessToken: string;
  refreshToken: string;
}

interface User {
  _id: string;
  userName: string;
  email: string;
  fullName: string;
  avatar: string;
  coverImage: string;
  watchHistory: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
