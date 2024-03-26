import axios, { AxiosInstance } from "axios";

const Instance: AxiosInstance = axios.create({
  baseURL: process.env.API_URL,
});

export { Instance };
