import FormTextInput from "../FormTextInput/FormTextInput";
import PropTypes from "prop-types";
import React from "react";

const CreateExerciseForm = ({ onSubmitFunction }) => {
  const handleSumbit = event => {
    event.preventDefault();
    const { exerciseName, exerciseDescription } = event.target.elements;
    onSubmitFunction({
      exerciseName: exerciseName.value,
      exerciseDescription: exerciseDescription.value
    });
  };
  return (
    <form onSubmit={handleSumbit}>
      <FormTextInput placeholder="Exercise Name" id="exerciseName" />
      <FormTextInput
        placeholder="Exercise Description"
        id="exerciseDescription"
      />
      <button type="submit"> Create </button>
    </form>
  );
};

CreateExerciseForm.propTypes = {
  onSubmitFunction: PropTypes.func.isRequired
};

export default CreateExerciseForm;
