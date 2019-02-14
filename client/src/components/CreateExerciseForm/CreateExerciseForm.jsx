import FormTextInput from "../FormTextInput/FormTextInput";
import PropTypes from "prop-types";
import React from "react";

const CreateExerciseForm = ({ onSubmitFunction }) => {
  /**
   * Getting values from the form
   * based on their IDs
   */
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
      <FormTextInput
        placeholder="e.g. Bench Press"
        id="exerciseName"
        label="Exercise Name"
      />
      <FormTextInput
        placeholder="Exercise Description"
        id="exerciseDescription"
        label="Exercise Description"
      />
      <button type="submit"> Create </button>
    </form>
  );
};

CreateExerciseForm.propTypes = {
  onSubmitFunction: PropTypes.func.isRequired
};

export default CreateExerciseForm;
