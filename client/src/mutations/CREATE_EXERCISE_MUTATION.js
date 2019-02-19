import gql from "graphql-tag";

export const CREATE_EXERCISE_MUTATION = gql`
  mutation createExercise(
    $type: ExerciseType!
    $name: String!
    $description: String!
  ) {
    createExercise(type: $type, name: $name, description: $description) {
      id
    }
  }
`;
