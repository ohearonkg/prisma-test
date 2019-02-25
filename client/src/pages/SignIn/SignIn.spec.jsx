import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import Signin from "./SignIn";

afterEach(cleanup);

const usernameText = "Username";
const sampleUsernameInput = "ABC";
const passwordText = "Password";
const setup = () => render(<Signin />);

describe("Sign In Page", () => {
  /**
   * Rendering username input
   */
  it("Should render a username input", () => {
    const { getByLabelText } = setup();
    expect(getByLabelText(usernameText));
  });

  /**
   * Rendering user's input in username
   * text input
   */
  it("Should register a the user's keystorkes within the username input", () => {
    const { getByLabelText, getByValue } = setup();
    fireEvent.change(getByLabelText(usernameText), {
      target: { value: sampleUsernameInput }
    });
    expect(getByValue(sampleUsernameInput));
  });

  /**
   * Rendering Password input
   */
  it("Should render a password input", () => {
    const { getByLabelText } = setup();
    expect(getByLabelText(passwordText));
  });
});
