import { cleanup, render } from "react-testing-library";

import PageHeading from "./PageHeading";
import React from "react";

/**
 * Variables for testing
 */
const samplePageHeadingText = "PAGE HEADING";

const setup = () => render(<PageHeading>{samplePageHeadingText}</PageHeading>);

describe("Page Heading Component", () => {
  /**
   * Rendering children
   */
  it("Should reder any children", () => {
    const { getByText } = setup();
    expect(getByText(samplePageHeadingText));
  });
});
