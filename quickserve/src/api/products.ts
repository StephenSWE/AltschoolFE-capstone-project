import axios from "axios";

export const fetchProducts = async () => {
  const { data } = await axios.get(
    "https://api.oluwasetemi.dev/products"
  );
  return data;
};