import gql from "graphql-tag";

export const SIGNIN_USER_MUTATION = gql`
  mutation SIGNIN_USER_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      password
    }
  }
`;
