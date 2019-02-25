import gql from "graphql-tag";

export const GET_USER_PROFILE_QUERY = gql`
  query GET_USER_PROFILE_QUERY($id: ID!) {
    userProfile(id: $id) {
      email
    }
  }
`;
