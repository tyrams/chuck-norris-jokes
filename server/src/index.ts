import "reflect-metadata";
import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { CategoryResolver } from "./resolvers/category-resolver";
import { JokeResolver } from "./resolvers/joke-resolver";

(async () => {
  const schema = await buildSchema({
    resolvers: [CategoryResolver, JokeResolver],
  });

  const app = express();
  app.use(cors());
  const server = new ApolloServer({ schema });
  server.applyMiddleware({ app });

  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`Graphql server started at http://localhost:${port}/graphql`);
  });
})();
