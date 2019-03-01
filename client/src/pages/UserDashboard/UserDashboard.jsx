import React from "react";
import Tabs from "../../components/Tabs/Tabs";
import { Mutation, Query } from "react-apollo";

import { CREATE_EXERCISE_MUTATION } from "../../mutations/CREATE_EXERCISE_MUTATION";
import CreateExerciseForm from "../../components/CreateExerciseForm/CreateExerciseForm";
import { GET_EXERCISE_TYPES_QUERY } from "../../queries/GET_EXERCISE_TYPES_QUERY";

const UserDashboard = () => (
  <>
    <Tabs
      tabs={[
        {
          title: "CREATE EXERCISE",

          component: (
            <Mutation mutation={CREATE_EXERCISE_MUTATION}>
              {(createExercise, { data }) => (
                <Query query={GET_EXERCISE_TYPES_QUERY}>
                  {({ loading, error, data: { __type: enumValues } }) => {
                    if (!loading && !error && enumValues.length > 0) {
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
                    }
                    return null;
                  }}
                </Query>
              )}
            </Mutation>
          )
        },
        {
          title: "CREATE PROGRAM",
          component: <div>CREATE PROGRAM DIV </div>
        },
        {
          title: "SCHEDULE PROGRAM",
          component: <div>SCHEDULE PROGRAM DIV </div>
        }
      ]}
    />
  </>
);

export default UserDashboard;
