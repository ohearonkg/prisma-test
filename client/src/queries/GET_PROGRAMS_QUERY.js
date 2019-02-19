import gql from "graphql-tag";

export const GET_PROGRAMS_QUERY = gql`
  query GET_PROGRAMS_QUERY($userID: ID!) {
    programs(where: { user: { id: $userID } }) {
      id
      name
    }
  }
`;
