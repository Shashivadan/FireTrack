import axios, { AxiosInstance } from "axios";

const Instance: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
});

export default Instance;
