import { cleanup, fireEvent, render } from "react-testing-library";

import React from "react";
import Signup from "./Signup";

afterEach(cleanup);

/**
 * Variables used for tests
 */
const sampleUsernameInput = "ABC";
const sampleUserPassword = "DEF";
const sampleCreateUserFunction = jest.fn();

const setup = () =>
  render(<Signup createUserFunction={sampleCreateUserFunction} />);

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

  /**
   * Updating form as user enters password
   */
  it("Should update the value of its Password field as the user types within it", () => {
    const { getByLabelText, getByValue } = setup();
    fireEvent.change(getByLabelText("Password"), {
      target: { value: sampleUserPassword }
    });
    expect(getByValue(sampleUserPassword));
  });

  /**
   * Calling createUserFunction when the user clicks
   * Signup Button
   */
  it("Should call the function passwed to its createUserFunction when the user clicks the Signup Button", () => {
    const { getByLabelText, getByText } = setup();
    fireEvent.change(getByLabelText("Username"), {
      target: { value: sampleUsernameInput }
    });
    fireEvent.change(getByLabelText("Password"), {
      target: { value: sampleUserPassword }
    });
    fireEvent.click(getByText("Signup"));
    expect(sampleCreateUserFunction).toHaveBeenCalledTimes(1);
  });

  /**
   * Calling createUserFunction with correct object
   */
  it("Should call the function passwed to its createUserFunction with the correct payload", () => {
    const { getByLabelText, getByText } = setup();
    fireEvent.change(getByLabelText("Username"), {
      target: { value: sampleUsernameInput }
    });
    fireEvent.change(getByLabelText("Password"), {
      target: { value: sampleUserPassword }
    });
    fireEvent.click(getByText("Signup"));
    expect(sampleCreateUserFunction).toHaveBeenCalledWith({
      userName: sampleUsernameInput,
      password: sampleUserPassword
    });
  });
});
