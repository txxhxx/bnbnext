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
      // TODO: check token from cookie

      // check token from header
      const token = req.headers.authorization;
      return jwt.verify(token, process.env.JWT_SECRET, (error, decoded: any) => ({
        id: decoded.id,
      }));
    },
  });

  /* setup middlewares */
  app.use(cors({ credentials: true }));
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
