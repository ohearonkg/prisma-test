import { cleanup, fireEvent, render } from "react-testing-library";

import CreateExerciseForm from "./CreateExerciseForm";
import React from "react";

const sampleSubmitFunction = jest.fn();
const sampleExerciseName = "SAMPLE_EXERCISE_NAME";
const sampleExerciseDescription = "SAMPLE_EXERCISE_DESCRIPTION";
const sampleOptions = ["BODYWEIGHT", "CARDIO"];

const samplePayload = {
  type: sampleOptions[0],
  name: sampleExerciseName,
  description: sampleExerciseDescription
};

const setup = () =>
  render(
    <CreateExerciseForm
      onSubmitFunction={sampleSubmitFunction}
      exerciseTypeOptions={sampleOptions}
    />
  );

afterEach(cleanup);

describe("Create Exercise Form", () => {
  /**
   * Calling onSubmit function
   */
  it("Should call its onSumbit function when the user clicks the Create button", () => {
    const { getByText } = setup();
    fireEvent.click(getByText("Create"));
    expect(sampleSubmitFunction).toHaveBeenCalledTimes(1);
  });

  /**
   * Passing option prop values onto Custom Select
   */
  it("Should allow the user to select an option from its option props within the rendered <CustomSelect />", () => {
    const { getByText } = setup();
    expect(getByText(sampleOptions[0]));
  });

  /**
   * Calling onSubmit with required passing required fields
   */
  it("Should pass its onSumbit function exercise name and description", () => {
    const { getByText, getByLabelText } = setup();
    fireEvent.change(getByLabelText(/Exercise Name/), {
      target: { value: sampleExerciseName }
    });
    fireEvent.change(getByLabelText(/Exercise Description/), {
      target: { value: sampleExerciseDescription }
    });
    fireEvent.click(getByText("Create"));
    expect(sampleSubmitFunction).toHaveBeenLastCalledWith(samplePayload);
  });
});
