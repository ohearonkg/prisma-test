import gql from "graphql-tag";

export const GET_RECENTLY_CREATED_EXERCISES_QUERY = gql`
  query GET_RECENTLY_CREATED_EXERCISES_QUERY {
    exercises(orderBy: createdAt_ASC, first: 5) {
      name
      id
    }
  }
`;
