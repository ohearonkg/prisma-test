import Card from "../components/Card/Card";
import { GET_PROGRAMS_QUERY } from "../queries/GET_PROGRAMS_QUERY";
import { GET_RECENTLY_CREATED_EXERCISES_QUERY } from "../queries/GET_RECENTLY_CREATED_EXERCISES_QUERY";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import React from "react";

const Home = () => (
  <div>
    Welcome Home
    <Link to="/createExercise"> Add Exercise </Link>
    {/* Programs */}
    <Query
      query={GET_PROGRAMS_QUERY}
      variables={{
        userID: "cjrz3929343fd0a70dc01zc8o"
      }}
    >
      {({ loading, error, data }) => (
        <div>
          {!loading && !error && data
            ? data.programs.map(program => (
                <Card key={program.id}>{program.name}</Card>
              ))
            : null}
        </div>
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

export default Home;
