import { cleanup, fireEvent, render } from "react-testing-library";

import FormTextInput from "./FormTextInput";
import React from "react";

const samplePlaceHolder = "SAMPLE_PLACEHOLDER";
const sampleInput = "SAMPLE_INPUT";

const setup = () => render(<FormTextInput placeholder={samplePlaceHolder} />);

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
   * Updating the displayed value
   */
  it("Should update its displayed input as the user types", () => {
    const { getByPlaceholderText, getByValue } = setup();
    const input = getByPlaceholderText(samplePlaceHolder);
    fireEvent.change(input, { target: { value: sampleInput } });
    expect(getByValue(sampleInput));
  });
});
