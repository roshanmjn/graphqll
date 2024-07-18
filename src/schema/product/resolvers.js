import {
  getProducts,
  getProduct,
  getProductsByCategory,
} from "../../utils/dataStore.js";

export const Product = {
  Query: {
    products: async (parent, args, context, info) => {
      const { category, price } = args?.filters;
      if (category && price) {
        return await getProductsByCategory(category).then((result) => {
          return result.sort(async (a, b) => {
            if (price === "ASC") {
              return a.price - b.price;
            } else {
              return b.price - a.price;
            }
          });
        });
      }

      if (category) {
        return await getProductsByCategory(category);
      }

      if (price) {
        return await getProducts().then((result) => {
          return result.sort((a, b) => {
            if (price === "ASC") {
              return a.price - b.price;
            } else {
              return b.price - a.price;
            }
          });
        });
      }
      return await getProducts();
    },
    product: async (parent, args, context, info) => {
      const { id } = args;
      return await getProduct(id);
    },
  },
};
