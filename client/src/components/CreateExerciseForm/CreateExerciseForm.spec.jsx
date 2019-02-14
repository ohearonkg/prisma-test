import { cleanup, fireEvent, render } from "react-testing-library";

import CreateExerciseForm from "./CreateExerciseForm";
import React from "react";

const sampleSubmitFunction = jest.fn();
const sampleExerciseName = "SAMPLE_EXERCISE_NAME";
const sampleExerciseDescription = "SAMPLE_EXERCISE_DESCRIPTION";

const samplePayload = {
  exerciseName: sampleExerciseName,
  exerciseDescription: sampleExerciseDescription
};

const setup = () =>
  render(<CreateExerciseForm onSubmitFunction={sampleSubmitFunction} />);

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
   * Calling onSubmit with required passing required fields
   */
  it("Should pass its onSumbit function exercise name and description", () => {
    const { getByText, getByPlaceholderText } = setup();
    fireEvent.change(getByPlaceholderText("Exercise Name"), {
      target: { value: sampleExerciseName }
    });
    fireEvent.change(getByPlaceholderText("Exercise Description"), {
      target: { value: sampleExerciseDescription }
    });
    fireEvent.click(getByText("Create"));
    expect(sampleSubmitFunction).toHaveBeenLastCalledWith(samplePayload);
  });
});
