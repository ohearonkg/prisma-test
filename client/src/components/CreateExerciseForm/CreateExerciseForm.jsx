import React, { useState } from "react";

import Button from "../Button/Button";
import CustomSelect from "../CustomSelect/CustomSelect";
import Input from "../Input/Input";
import PropTypes from "prop-types";
import TextArea from "../TextArea/TextArea";

const CreateExerciseForm = ({ onSubmitFunction, exerciseTypeOptions }) => {
  const [exerciseData, setExerciseData] = useState({
    type: exerciseTypeOptions[0],
    name: "",
    description: ""
  });
  const handleSumbit = event => {
    event.preventDefault();
    onSubmitFunction({ ...exerciseData });
  };

  const handleChange = (name, value) => {
    switch (name) {
      case "name":
        setExerciseData({ ...exerciseData, name: value });
        break;
      case "description":
        setExerciseData({ ...exerciseData, description: value });
        break;
      default:
        setExerciseData({ ...exerciseData, type: value });
    }
  };

  return (
    <form onSubmit={handleSumbit}>
      <CustomSelect
        options={exerciseTypeOptions}
        value={exerciseData.type}
        onChangeFunction={value => handleChange("type", value)}
      />
      <Input
        placeholder="e.g. Bench Press"
        id="exerciseName"
        label="Exercise Name"
        value={exerciseData.name}
        onChangeFunction={value => handleChange("name", value)}
      />
      <TextArea
        placeholder="Lay on a flat bench.."
        id="exerciseDescription"
        label="Exercise Description"
        value={exerciseData.description}
        onChangeFunction={value => handleChange("description", value)}
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
