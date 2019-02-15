import Button from "../Button/Button";
import CustomSelect from "../CustomSelect/CustomSelect";
import PropTypes from "prop-types";
import React from "react";
import TextArea from "../TextArea/TextArea";
import TextInput from "../TextInput/TextInput";

const CreateExerciseForm = ({ onSubmitFunction, exerciseTypeOptions }) => {
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
      <CustomSelect options={exerciseTypeOptions} />
      <TextInput
        placeholder="e.g. Bench Press"
        id="exerciseName"
        label="Exercise Name"
      />
      <TextArea
        placeholder="Lay on a flat bench.."
        id="exerciseDescription"
        label="Exercise Description"
      />
      <Button type="submit"> Create </Button>
    </form>
  );
};

CreateExerciseForm.propTypes = {
  exerciseTypeOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSubmitFunction: PropTypes.func.isRequired
};

export default CreateExerciseForm;
