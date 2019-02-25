import { cleanup, fireEvent, render } from "react-testing-library";

import React from "react";
import Signin from "./SignIn";

afterEach(cleanup);

const usernameText = "Username";
const sampleUsernameInput = "ABC";
const passwordText = "Password";
const samplePasswordInput = "DEF";
const buttonText = "Sign In";

const setup = () => render(<Signin />);

describe("Sign In Page", () => {
  /**
   * Rendering username input
   */
  it.skip("Should render a username input", () => {
    const { getByLabelText } = setup();
    expect(getByLabelText(usernameText));
  });

  /**
   * Rendering user's input in username
   * text input
   */
  it.skip("Should register a the user's keystorkes within the username input", () => {
    const { getByLabelText, getByValue } = setup();
    fireEvent.change(getByLabelText(usernameText), {
      target: { value: sampleUsernameInput }
    });
    expect(getByValue(sampleUsernameInput));
  });

  /**
   * Rendering Password input
   */
  it.skip("Should render a password input", () => {
    const { getByLabelText } = setup();
    expect(getByLabelText(passwordText));
  });

  /**
   * Rendering user's input in password
   * text input
   */
  it.skip("Should register a the user's keystorkes within the password input", () => {
    const { getByLabelText, getByValue } = setup();
    fireEvent.change(getByLabelText(passwordText), {
      target: { value: samplePasswordInput }
    });
    expect(getByValue(samplePasswordInput));
  });

  /**
   * Rendering sign in button
   */
  it.skip("Should render a signign button", () => {
    const { getByText } = setup();
    expect(getByText(buttonText));
  });
});
