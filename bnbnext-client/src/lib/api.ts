import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:4000",
});

export const localLogin = (email: string, password: string) => {
  apiClient
    .post(`/login`, {
      email,
      password,
    })
    .then((result) => console.log(result))
    .catch((err) => console.error(err));
};
