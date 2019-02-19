import gql from "graphql-tag";

export const CREATE_EXERCISE_MUTATION = gql`
  mutation CREATE_EXERCISE_MUTATION(
    $type: ExerciseType!
    $name: String!
    $description: String!
  ) {
    createExercise(type: $type, name: $name, description: $description) {
      id
    }
  }
`;
