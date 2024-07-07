import { mergeResolvers } from "@graphql-tools/merge";
import { Course } from "./course/resolvers.js";
import { Genre } from "./genre/resolvers.js";

const resolvers = [Course, Genre];

export default mergeResolvers(resolvers);
