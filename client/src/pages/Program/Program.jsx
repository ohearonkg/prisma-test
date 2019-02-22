import { ExerciseList, ExerciseName, ExerciseRow } from "./styles";

import { GET_PROGRAM_QUERY } from "../../queries/GET_PROGRAM_QUERY";
import PageHeading from "../../components/PageHeading/PageHeading";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import React from "react";

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
