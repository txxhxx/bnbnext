import apiClient from "./apiClient";

export const login = (email: string, password: string) =>
  apiClient.post("/login", { email, password });

export const register = async (
  email: string,
  password: string,
  nickname: string
) => {
  apiClient.post(
    "/register",
    {
      email: email,
      password: password,
      nickname: nickname,
    },
    { withCredentials: true }
  );
};
