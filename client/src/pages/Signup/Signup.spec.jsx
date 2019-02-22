import { cleanup, fireEvent, render } from "react-testing-library";

import React from "react";
import Signup from "./Signup";

afterEach(cleanup);

const setup = () => render(<Signup />);

/**
 * Variables used for tests
 */
const sampleUsernameInput = "ABC";

describe("Signup Page", () => {
  /**
   * Rendering Signup Form
   */
  it("Should render a signup form", () => {
    const { getByLabelText, getByText } = setup();
    expect(getByLabelText("Username"));
    expect(getByLabelText("Password"));
    expect(getByText("Signup"));
  });

  /**
   * Updating form as user enters usernam
   */
  it("Should update the value of its Username field as the user types within it", () => {
    const { getByLabelText, getByValue } = setup();
    fireEvent.change(getByLabelText("Username"), {
      target: { value: sampleUsernameInput }
    });
    expect(getByValue(sampleUsernameInput));
  });
});
