import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:4000",
});

export const localLogin = async (email: string, password: string) =>
  apiClient.post("/login", { email, password });
