import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://buyandbelieve.com/api",
});

export const getProducts = async () => {
  const res = await apiClient.get("/buys/1?per_page=20");

  return res.data;
};

export const getCollections = async () => {
  const res = await apiClient.get("/feeds?per_page=20");

  return res.data;
};

export const getStories = async (category?: string) => {
  if (!category) {
    const res = await apiClient.get(`/believes?per_page=20`);

    return res.data;
  }

  const res = await apiClient.get(
    `/believe/${category ? category : null}?per_page=20`
  );

  return res.data;
};
