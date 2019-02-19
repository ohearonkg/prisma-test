import gql from "graphql-tag";

export const GET_EXERCISE_TYPES_QUERY = gql`
  query GET_EXERCISE_TYPES_QUERY {
    __type(name: "ExerciseType") {
      enumValues {
        name
      }
    }
  }
`;
