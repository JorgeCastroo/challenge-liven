import api from "../api";

export const getCategories = async () => {
  try {
    const { data } = await api.get(`products/categories`);
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
