import axios from "axios";

const baseURL = "https://fakestoreapi.com";

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

/** Get all categories */

export const getCategories = async () => {
  console.log("getCategories");
  try {
    const response = await axiosInstance.get("/products/categories");
    const data = response.data.map((category, index) => {
      return { id: index + 1, name: category };
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

/** Get all products */

export const getProducts = async () => {
  console.log("getProducts");
  try {
    const response = await axiosInstance.get("/products");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

/** Get a single product */

export const getProduct = async (id) => {
  console.log("getProduct");
  try {
    const response = await axiosInstance.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

/** Get product with specific category */

export const getProductsByCategory = async (category) => {
  console.log("getProductsByCategory");
  try {
    const response = await axiosInstance.get(`/products/category/${category}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
