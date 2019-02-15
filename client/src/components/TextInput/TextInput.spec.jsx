import { cleanup, fireEvent, render } from "react-testing-library";

import React from "react";
import TextInput from "./TextInput";

const samplePlaceHolder = "SAMPLE_PLACEHOLDER";
const sampleId = "SAMPLE_ID";
const sampleLabel = "SAMPLE_LABEL";

const sampleInput = "SAMPLE_INPUT";
const sampleOnChangeFunction = jest.fn();
const sampleValue = "AB";

const setup = () =>
  render(
    <TextInput
      placeholder={samplePlaceHolder}
      id={sampleId}
      label={sampleLabel}
      onChangeFunction={sampleOnChangeFunction}
      value={sampleValue}
    />
  );

afterEach(cleanup);

describe("Form Text Input", () => {
  /**
   * Rendering Placeholder
   */
  it("Should display the placeholder passed to its label prop", () => {
    const { getByPlaceholderText } = setup();
    expect(getByPlaceholderText(samplePlaceHolder));
  });

  /**
   * Rendering id
   */
  it("Should display the id passed to is id prop", () => {
    const { container } = setup();
    expect(container.querySelector(`#${sampleId}`)).not.toBeNull();
  });

  /**
   * Rendering label
   */
  it("Should render the label passed to its label prop", () => {
    const { getByLabelText } = setup();
    expect(getByLabelText(new RegExp(sampleLabel)));
  });
  /**
   * Calling update function
   */
  it("Should call its update function with the value the user has typed", () => {
    const { getByLabelText } = setup();
    fireEvent.change(getByLabelText(sampleLabel), {
      target: { value: sampleInput }
    });
    expect(sampleOnChangeFunction).toHaveBeenCalledWith(sampleInput);
  });

  /**
   * Updating the displayed value
   */
  it("Should display the text passed to it value prop", () => {
    const { getByValue } = setup();
    expect(getByValue(sampleValue));
  });
});
