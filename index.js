import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
// import { startStandaloneServer } from "@apollo/server/standalone";
/* import { typeDefs } from "./schema.js";
import { Query } from "./resolvers/query.js";
import { Mutation } from "./resolvers/mutation.js";
import { Genre } from "./resolvers/genre.js";
import { Course } from "./resolvers/course.js"; */
import { db } from "./database.js";
import express from "express";
import cors from "cors";
import getSchema from "./src/schema/index.js";
const app = express();
const port = 4000;
const schema = await getSchema();

const server = new ApolloServer({
  schema: schema,
  /* typeDefs,
  // resolvers: { Query, Mutation, Genre, Course }, */
});

await server.start();

app.get("/", (req, res) => {
  res.send("GQL Server is running!");
});

app.use(
  "/graphql",
  cors(),
  express.json(),
  expressMiddleware(server, {
    context: async ({ req, res }) => ({
      db,
    }),
  })
);

app.listen(port, () => {
  console.log(`listening to: http://localhost:${port}/graphql`);
});

/** below code with just for standalone server and no express js */
// const { url } = await startStandaloneServer(server, {
//   listen: {
//     port: port,
//   },
//   context: async ({ req, res }) => ({
//     db,
//   }),
// });

// console.log(`listening to: ${url}`);
