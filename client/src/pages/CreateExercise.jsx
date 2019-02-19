import { Mutation, Query } from "react-apollo";

import { CREATE_EXERCISE_MUTATION } from "../mutations/CREATE_EXERCISE_MUTATION";
import CreateExerciseForm from "../components/CreateExerciseForm/CreateExerciseForm";
import { GET_EXERCISE_TYPES_QUERY } from "../queries/GET_EXERCISE_TYPES_QUERY";
import React from "react";

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
                onSubmitFunction={exerciseData =>
                  createExercise({
                    variables: {
                      ...exerciseData
                    }
                  })
                }
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
