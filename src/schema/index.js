import { makeExecutableSchema, mergeSchemas } from "@graphql-tools/schema";
import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers.js";

export default async () => {
  const localSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const schema = mergeSchemas({
    schemas: [localSchema],
  });

  return schema;
};
