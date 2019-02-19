import { Mutation, Query } from "react-apollo";

import CreateExerciseForm from "../components/CreateExerciseForm/CreateExerciseForm";
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

const CREATE_EXERCISE_MUTATION = gql`
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

const CreateExercise = () => {
  return (
    <Mutation mutation={CREATE_EXERCISE_MUTATION}>
      {(createExercise, { data }) => (
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
                onSubmitFunction={exerciseData => {
                  console.log(exerciseData);
                  return createExercise({
                    variables: {
                      ...exerciseData
                    }
                  });
                }}
                exerciseTypeOptions={exerciseTypes}
              />
            );
          }}
        </Query>
      )}
    </Mutation>
  );
};

export default CreateExercise;
