import { cleanup, render } from "react-testing-library";

import React from "react";
import Signup from "./Signup";

afterEach(cleanup);

const setup = () => render(<Signup />);

describe("Signup Page", () => {
  /**
   * Rendering Signup Form
   */
  it("Should render a signup form", () => {
    const { getByLabelText, getByText } = setup();
    expect(getByLabelText("Name"));
    expect(getByLabelText("Password"));
    expect(getByText("Signup"));
  });
});
