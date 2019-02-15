import CreateExerciseForm from "../components/CreateExerciseForm/CreateExerciseForm";
import { Query } from "react-apollo";
import React from "react";
import gql from "graphql-tag";

const GET_EXERCISE_TYPES_QUERY = gql`
  query GET_EXERCISE_TYPES_QUERY {
    __type(name: "ExerciseType") {
      enumValues {
        name
      }
    }
  }
`;

const CreateExercise = () => {
  const handleSubmit = ({
    exerciseType,
    exerciseName,
    exerciseDescription
  }) => {};
  return (
    <Query query={GET_EXERCISE_TYPES_QUERY}>
      {({ loading, error, data: { __type: enumValues } }) => {
        if (loading) {
          return null;
        }
        if (error) {
          return null;
        }
        const exerciseTypes = enumValues.enumValues.map(
          exerciseType => exerciseType.name
        );
        return (
          <CreateExerciseForm
            onSubmitFunction={handleSubmit}
            exerciseTypeOptions={exerciseTypes}
          />
        );
      }}
    </Query>
  );
};

export default CreateExercise;
