import React from "react";
import { render, cleanup } from "react-testing-library";
import Signin from "./SignIn";

afterEach(cleanup);

const usernameText = "Username";
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
   * Rendering Password input
   */
  it("Should render a password input", () => {
    const { getByLabelText } = setup();
    expect(getByLabelText(passwordText));
  });
});
