import { getCategories, getProductsByCategory } from "../../utils/dataStore.js";

export const Category = {
  Query: {
    categories: (parent, args, context, info) => {
      return getCategories();
    },
  },
  Category: {
    products: (parent, args, context, info) => {
      const categoryName = parent?.name;
      if (!categoryName) return [];
      return getProductsByCategory(categoryName);
    },
  },
};
