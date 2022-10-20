import { ApolloError, gql } from "apollo-server";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export const typeDefs = gql`
  type User {
    id: String
    email: String
    nickname: String
    provider: [String]
    role: String
  }

  extend type Query {
    users: [User]
  }
`;

export const resolvers = {
  Query: {
    users: async (parent, args, context, info) => {
      const userRepo = AppDataSource.getRepository(User);
      const user = await userRepo.findOne({ where: { id: context.user_id } });

      if (user.role !== "admin") {
        throw new ApolloError("Permission denied.");
      }

      return await userRepo.find();
    },
  },
};
