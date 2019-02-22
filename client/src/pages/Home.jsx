import Card from "../components/Card/Card";
import { GET_PROGRAMS_QUERY } from "../queries/GET_PROGRAMS_QUERY";
import { GET_RECENTLY_CREATED_EXERCISES_QUERY } from "../queries/GET_RECENTLY_CREATED_EXERCISES_QUERY";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import React from "react";
import styled from "@emotion/styled";

const ProgramsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
`;

const Home = ({ history }) => {
  const handleNavigation = programId => {
    history.push(`/program/${programId}`);
  };

  return (
    <div>
      Welcome Home
      <Link to="/createExercise"> Add Exercise </Link>
      <Link to="/signup"> Signup </Link>
      {/* Programs */}
      <Query
        query={GET_PROGRAMS_QUERY}
        variables={{
          userID: "cjrz3929343fd0a70dc01zc8o"
        }}
      >
        {({ loading, error, data }) => (
          <ProgramsGrid>
            {!loading && !error && data
              ? data.programs.map(program => (
                  <Card
                    onClickFunction={() => handleNavigation(program.id)}
                    key={program.id}
                  >
                    {program.name}
                  </Card>
                ))
              : null}
          </ProgramsGrid>
        )}
      </Query>
      {/* Recent Exercises */}
      <Query query={GET_RECENTLY_CREATED_EXERCISES_QUERY}>
        {({ loading, error, data }) => (
          <ul>
            {!loading && !error && data
              ? data.exercises.map(exercise => (
                  <li key={exercise.id}>{exercise.name}</li>
                ))
              : null}
          </ul>
        )}
      </Query>
    </div>
  );
};

Home.propTypes = {
  history: PropTypes.object.isRequired
};
export default Home;
