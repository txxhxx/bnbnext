import { gql } from "apollo-server";
import { AppDataSource } from "../data-source";
import { Collection } from "../entity/Collection";

export const typeDefs = gql`
  type Collection {
    id: String
    name: String
  }

  extend type Query {
    collections: [Collection]
  }
`;

export const resolvers = {
  Query: {
    collections: async (parent, args, context) => {
      const collectionRepo = AppDataSource.getRepository(Collection);

      return await collectionRepo.find();
    },
  },
};
