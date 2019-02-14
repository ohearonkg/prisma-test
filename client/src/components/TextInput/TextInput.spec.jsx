import { cleanup, fireEvent, render } from "react-testing-library";

import FormTextInput from "./TextInput";
import React from "react";

const samplePlaceHolder = "SAMPLE_PLACEHOLDER";
const sampleInput = "SAMPLE_INPUT";
const sampleLabel = "SAMPLE_LABEL";
const sampleId = "SAMPLE_ID";

const setup = () =>
  render(
    <FormTextInput
      placeholder={samplePlaceHolder}
      id={sampleId}
      label={sampleLabel}
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
   * Updating the displayed value
   */
  it("Should update its displayed input as the user types", () => {
    const { getByPlaceholderText, getByValue } = setup();
    const input = getByPlaceholderText(samplePlaceHolder);
    fireEvent.change(input, { target: { value: sampleInput } });
    expect(getByValue(sampleInput));
  });
});
