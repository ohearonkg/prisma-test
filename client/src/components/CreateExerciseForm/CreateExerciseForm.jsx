import FormTextInput from "../FormTextInput/FormTextInput";
import React from "react";

const CreateExerciseForm = () => {
  const handleSumbit = e => {
    e.preventDefault();
    console.log({ target: e.target });
  };
  return (
    <form onSubmit={handleSumbit}>
      <FormTextInput placeholder="Exercise Name" />
      <FormTextInput placeholder="Exercise Description" />
      <button type="submit"> Create </button>
    </form>
  );
};

export default CreateExerciseForm;
