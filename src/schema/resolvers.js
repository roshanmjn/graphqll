import { mergeResolvers } from "@graphql-tools/merge";
import { Course } from "./course/resolvers.js";
import { Genre } from "./genre/resolvers.js";
import { Category } from "./category/resolvers.js";
import { Product } from "./product/resolvers.js";

const resolvers = [Course, Genre, Category, Product];

export default mergeResolvers(resolvers);
