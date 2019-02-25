import gql from "graphql-tag";

export const SIGNUP_USER_MUTATION = gql`
  mutation SIGNUP_USER_MUTATION($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      id
    }
  }
`;
