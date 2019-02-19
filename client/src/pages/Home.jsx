import { GET_RECENTLY_CREATED_EXERCISES_QUERY } from "../queries/GET_RECENTLY_CREATED_EXERCISES_QUERY";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import React from "react";

const Home = () => (
  <Query query={GET_RECENTLY_CREATED_EXERCISES_QUERY}>
    {({ loading, error, data }) => (
      <div>
        Welcome Home
        <Link to="/createExercise"> Add Exercise </Link>
        <ul>
          {!loading && !error && data
            ? data.exercises.map(exercise => (
                <li key={exercise.id}>{exercise.name}</li>
              ))
            : null}
        </ul>
      </div>
    )}
  </Query>
);

export default Home;
