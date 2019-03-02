import React, { useState } from "react";
import { Mutation, Query, ApolloConsumer } from "react-apollo";
import Tabs, { TabList, Tab, TabPanels, TabPanel } from "../../components/Tabs";
import { CREATE_EXERCISE_MUTATION } from "../../mutations/CREATE_EXERCISE_MUTATION";
import CreateExerciseForm from "../../components/CreateExerciseForm/CreateExerciseForm";
import { GET_EXERCISE_TYPES_QUERY } from "../../queries/GET_EXERCISE_TYPES_QUERY";
import { GET_EXERCISES_QUERY } from "../../queries/GET_EXERCISES_QUERY";
import PageHeading from "../../components/PageHeading/PageHeading";

const UserDashboard = () => (
  <>
    <Tabs>
      <TabList>
        <Tab>CREATE EXERCISE</Tab>
        <Tab>CREATE PROGRAM</Tab>
        <Tab>SCHEDULE PROGRAM</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Mutation mutation={CREATE_EXERCISE_MUTATION}>
            {(createExercise, { data }) => {
              if (data) {
                alert("Exercise Created");
              }
              return (
                <Query query={GET_EXERCISE_TYPES_QUERY}>
                  {({ loading, error, data: { __type: enumValues } }) => {
                    if (loading) {
                      return <h1> Loading ... </h1>;
                    }
                    if (error) {
                      return <h1> ERROR</h1>;
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
              );
            }}
          </Mutation>
        </TabPanel>

        <TabPanel>
          <div>
            <PageHeading>CREATE PROGRAM DIV</PageHeading>
            <ExerciseInput />
          </div>
        </TabPanel>

        <TabPanel>
          <div>SCHEDULE PROGRAM DIV</div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </>
);

const ExerciseInput = () => {
  const [text, setText] = useState("");
  const [exercises, setExercises] = useState([]);
  return (
    <ApolloConsumer>
      {client => (
        <>
          <h2> Exercise Search </h2>
          <input
            value={text}
            onChange={async e => {
              setText(e.target.value);
              const {
                data: { exercises }
              } = await client.query({
                query: GET_EXERCISES_QUERY,
                variables: {
                  text
                }
              });
              setExercises(exercises);
            }}
          />
          <div>
            <h3> Results </h3>
            {exercises.map(exercise => (
              <div key={exercise.id}> {exercise.name} </div>
            ))}
          </div>
        </>
      )}
    </ApolloConsumer>
  );
};
export default UserDashboard;
