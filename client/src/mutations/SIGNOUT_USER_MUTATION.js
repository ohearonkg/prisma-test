import gql from "graphql-tag";

export const SIGNOUT_USER_MUTATION = gql`
  mutation SIGNOUT_USER_MUTATION {
    signout {
      message
    }
  }
`;
