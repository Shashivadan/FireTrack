import axios, { AxiosInstance } from "axios";

const token = localStorage.getItem("token");
const Instance: AxiosInstance = axios.create({
  baseURL: "https://firetrack.onrender.com/",
  headers: {
    token: "Bearer " + token,
  },
});

function getAuthToken() {
  const token = localStorage.getItem("token");
  if (!token) {
    delete Instance.defaults.headers.common["token"];
    return;
  }
  Instance.defaults.headers.common["token"] = "Bearer " + token;
}

export { getAuthToken };
export default Instance;
