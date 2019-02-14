import { Link } from "react-router-dom";
import React from "react";

const Home = () => (
  <div>
    Welcome Home
    <Link to="/createExercise"> Add Exercise </Link>
  </div>
);

export default Home;
