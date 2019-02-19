import { cleanup, fireEvent, render } from "react-testing-library";

import React from "react";
import TextArea from "./TextArea";

const samplePlaceHolder = "SAMPLE_PLACEHOLDER";
const sampleInput = "SAMPLE_INPUT";
const sampleLabel = "SAMPLE_LABEL";
const sampleId = "SAMPLE_ID";
const sampleValue = "CD";
const sampleOnChangeFunction = jest.fn();

const setup = () =>
  render(
    <TextArea
      placeholder={samplePlaceHolder}
      id={sampleId}
      label={sampleLabel}
      onChangeFunction={sampleOnChangeFunction}
      value={sampleValue}
    />
  );

afterEach(cleanup);

describe("Text Area", () => {
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
    const { getByText } = setup();
    expect(getByText(sampleValue));
  });
});
