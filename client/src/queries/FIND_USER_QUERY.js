import gql from "graphql-tag";

export const FIND_USER_QUERY = gql`
  query GET_EXERCISE_TYPES_QUERY($username: String!) {
    users(username: $username) {
      id
    }
  }
`;
