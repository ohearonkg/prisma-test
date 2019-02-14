import React, { useState } from "react";

const CreateExerciseForm = () => {
  const [formValues, setFormValues] = useState({
    exerciseName: "",
    exerciseType: "",
    exerciseDescription: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form>
      <input
        type="text"
        name="exerciseName"
        label="Exercise Name"
        required
        onChange={handleChange}
        value={formValues.exerciseName}
      />

      <input
        type="text"
        name="exerciseType"
        label="Exercise Type"
        required
        onChange={handleChange}
        value={formValues.exerciseType}
      />

      <input
        type="text"
        name="exerciseDescription"
        label="Exercise Description"
        required
        onChange={handleChange}
        value={formValues.exerciseDescription}
      />
    </form>
  );
};

export default CreateExerciseForm;
