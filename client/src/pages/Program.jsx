import { GET_PROGRAM_QUERY } from "../queries/GET_PROGRAM_QUERY";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import React from "react";
import styled from "@emotion/styled";

const PageHeading = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 36px;
  font-weight: 300;
  margin: 0;
  padding: 0;
`;

const ExerciseList = styled.ol`
  list-style: none;
  margin: 0;
`;

const ExerciseRow = styled.li`
  display: flex;
  align-items: stretch;
`;

const ExerciseName = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 12px;
`;

const Program = ({
  match: {
    params: { programID }
  }
}) => (
  <Query query={GET_PROGRAM_QUERY} variables={{ programID }}>
    {({ loading, error, data: { program } }) =>
      !loading && !error && program ? (
        <>
          <PageHeading> {program.name} </PageHeading>
          <ExerciseList>
            {program.exercises.map(exercise => (
              <ExerciseRow key={exercise.id}>
                <img
                  src="https://via.placeholder.com/100"
                  alt={`${exercise.name}-image`}
                />
                <ExerciseName>{exercise.name}</ExerciseName>
                {exercise.description}
              </ExerciseRow>
            ))}
          </ExerciseList>
        </>
      ) : null
    }
  </Query>
);

Program.propTypes = {
  match: PropTypes.object.isRequired
};
export default Program;
