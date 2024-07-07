import axios, { AxiosInstance } from "axios";

export const getInstance = (): AxiosInstance => axios.create();
