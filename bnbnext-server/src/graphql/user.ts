import { ApolloError, gql } from "apollo-server";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export const typeDefs = gql`
  type User {
    id: String
    email: String
    nickname: String
    provider: [String]
  }

  type Token {
    token: String
  }

  extend type Query {
    users: [User]
  }
`;

export const resolvers = {
  Query: {
    users: async () => {
      const userRepo = AppDataSource.getRepository(User);

      return await userRepo.find();
    },
  },
};
