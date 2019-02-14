import { cleanup, render } from "react-testing-library";

import FormTextInput from "./FormTextInput";
import React from "react";

const sampleLabel = "SAMPLE_LABEL";
const setup = () => render(<FormTextInput label={sampleLabel} />);

afterEach(cleanup);

describe("Form Text Input", () => {
  /**
   * Rendering label
   */
  it("Should display the label passed to its label prop", () => {
    const { getByLabelText } = setup();
    expect(getByLabelText(sampleLabel));
  });
});
