import axios from "axios";

const host =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000"
    : "http://localhost:4000";

const apiClient = axios.create({
  baseURL: host,
  withCredentials: true,
});

export default apiClient;
