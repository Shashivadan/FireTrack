import axios, { AxiosInstance } from "axios";

const Instance: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    token: `Bearer ${sessionStorage.getItem("token")}`,
  },
});

function getAuthToken(): void {
  const token = sessionStorage.getItem("token");
  if (!token) {
    delete Instance.defaults.headers.common["token"];
    return;
  }
  Instance.defaults.headers.common["token"] = "Bearer " + token;
}

export { getAuthToken };
export default Instance;
