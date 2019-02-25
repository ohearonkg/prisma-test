import gql from "graphql-tag";

export const FIND_USER_QUERY = gql`
  query FIND_USER_QUERY($email: String!) {
    user(where: { email: $email }) {
      id
    }
  }
`;
