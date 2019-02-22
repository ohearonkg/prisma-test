import gql from "graphql-tag";

export const CREATE_USER_MUTATION = gql`
  mutation CREATE_USER_MUTATION($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      id
    }
  }
`;
