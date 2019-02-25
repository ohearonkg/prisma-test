import gql from "graphql-tag";

export const SIGNIN_USER_QUERY = gql`
  query SIGNIN_USER_QUERY($username: String!, $password: String!) {
    signin(username: $username, password: $password) {
      username
      id
    }
  }
`;
