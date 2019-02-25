import { cleanup, render } from "react-testing-library";

import Header from "./Header";
import React from "react";

afterEach(cleanup);

const setup = () => render(<Header />);

describe("Header Component", () => {
  /**
   * Rendering links
   */
});
