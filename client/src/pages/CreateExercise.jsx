import CreateExerciseForm from "../components/CreateExerciseForm/CreateExerciseForm";
import React from "react";

const CreateExercise = () => {
  const handleSubmit = ({ exerciseName, exerciseDescription }) => {
    console.log(`Name ${exerciseName}`);
    console.log(`Description ${exerciseDescription}`);
  };
  return <CreateExerciseForm onSubmitFunction={handleSubmit} />;
};

export default CreateExercise;
