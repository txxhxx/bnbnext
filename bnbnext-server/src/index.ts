import { ApolloServer } from "apollo-server-express";
import express from "express";
import schema from "./graphql/schema";
import http from "http";
import api from "./routes";
import passport from "passport";
import "./passport";
import session from "express-session";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { AppDataSource } from "./data-source";
import cors from "cors";
import { decodeToken } from "./lib/token";

dotenv.config();

AppDataSource.initialize()
  .then(() => {
    console.log("DB connection: success");
  })
  .catch((err) => {
    console.error("DB connection: fail", err);
  });

async function startApolloServer(schema) {
  const app = express();
  const httpServer = http.createServer(app);
  const apollo = new ApolloServer({
    schema,
    context: async ({ req }) => {
      // check token from header
      const token = req.headers.authorization;

      try {
        const decoded: any = await decodeToken(token);
        return {
          user_id: decoded.user_id,
        };
      } catch (e) {
        return {};
      }
    },
  });

  /* setup middlewares */
  app.use(cors({ origin: "http://localhost:3000", credentials: true }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use(
    session({
      secret: "keyboard cat",
      resave: true,
      saveUninitialized: false,
    })
  );

  // using passport
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(api);

  await apollo.start();
  apollo.applyMiddleware({ app });

  await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));

  console.log(`🚀 Server ready at http://localhost:4000${apollo.graphqlPath}`);
}

startApolloServer(schema);
