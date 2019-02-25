import "jest-dom/extend-expect";

import { cleanup, fireEvent, render } from "react-testing-library";

import Input from "./Input";
import React from "react";

const samplePlaceHolder = "SAMPLE_PLACEHOLDER";
const sampleId = "SAMPLE_ID";
const sampleLabel = "SAMPLE_LABEL";

const sampleInput = "SAMPLE_INPUT";
const sampleOnChangeFunction = jest.fn();
const sampleValue = "AB";
const sampleErrorText = "Username is not unique";

const setup = () =>
  render(
    <Input
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

  /**
   * Showing error state if provided
   */
  it("Should display an error if provided", () => {
    const { getByText } = render(
      <Input
        placeholder={samplePlaceHolder}
        id={sampleId}
        label={sampleLabel}
        onChangeFunction={sampleOnChangeFunction}
        value={sampleValue}
        error={true}
        errorText={sampleErrorText}
      />
    );

    expect(getByText(sampleErrorText));
  });

  /**
   * Allowing the user to define the type
   */
  it("Should be able to create an input of different types", () => {
    const { getByLabelText } = render(
      <Input
        placeholder={samplePlaceHolder}
        id={sampleId}
        label={sampleLabel}
        onChangeFunction={sampleOnChangeFunction}
        value={sampleValue}
        type="password"
      />
    );

    expect(getByLabelText(sampleLabel)).toHaveAttribute("type", "password");
  });
});
