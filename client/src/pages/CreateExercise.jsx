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
  const handleSubmit = ({ exerciseName, exerciseDescription }) => {
    console.log(`Name ${exerciseName}`);
    console.log(`Description ${exerciseDescription}`);
  };
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
          (exerciseType, index) => ({ name: exerciseType.name, index })
        );
        return <CreateExerciseForm onSubmitFunction={handleSubmit} />;
      }}
    </Query>
  );
};

export default CreateExercise;
