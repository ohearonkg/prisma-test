import gql from "graphql-tag";

export const GET_EXERCISES_QUERY = gql`
  query GET_EXERCISES_QUERY($text: String!) {
    exercises(where: { name_contains: $text }) {
      id
      name
    }
  }
`;
