import { gql } from "@apollo/client";

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      email
      nickname
      provider
      role
    }
  }
`;

export { GET_USERS };
