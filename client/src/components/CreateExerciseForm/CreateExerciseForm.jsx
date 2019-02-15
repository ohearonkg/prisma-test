import React, { useState } from "react";

import Button from "../Button/Button";
import CustomSelect from "../CustomSelect/CustomSelect";
import PropTypes from "prop-types";
import TextArea from "../TextArea/TextArea";
import TextInput from "../TextInput/TextInput";

const CreateExerciseForm = ({ onSubmitFunction, exerciseTypeOptions }) => {
  const [exerciseData, setExerciseData] = useState({
    exerciseType: exerciseTypeOptions[0],
    exerciseName: "",
    exerciseDescription: ""
  });
  const handleSumbit = event => {
    event.preventDefault();
    onSubmitFunction({
      exerciseType,
      exerciseName,
      exerciseDescription
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case "exerciseName":
        setExerciseData({ ...exerciseData, exerciseName: value });
      case "exerciseDescription":
        setExerciseData({ ...exerciseData, exerciseDescription: value });
      default:
        setExerciseData({ ...exerciseData, exerciseType: value });
    }
  };

  return (
    <form onSubmit={handleSumbit}>
      <CustomSelect options={exerciseTypeOptions} />
      <TextInput
        placeholder="e.g. Bench Press"
        id="exerciseName"
        name="exerciseName"
        label="Exercise Name"
        value={exerciseData.exerciseName}
        onChangeFunction={event => handleChange(event)}
      />
      <TextArea
        placeholder="Lay on a flat bench.."
        id="exerciseDescription"
        name="exerciseDescription"
        label="Exercise Description"
        value={exerciseData.exerciseDescription}
        onChangeFunction={event => handleChange(event)}
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
