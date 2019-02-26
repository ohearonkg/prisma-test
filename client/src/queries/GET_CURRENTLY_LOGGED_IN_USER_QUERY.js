import gql from "graphql-tag";

export const GET_CURRENTLY_LOGGED_IN_USER_QUERY = gql`
  query GET_CURRENTLY_LOGGED_IN_USER_QUERY {
    currentlyLoggedInUser {
      firstname
      lastname
    }
  }
`;
