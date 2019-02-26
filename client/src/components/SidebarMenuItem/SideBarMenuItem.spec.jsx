import { cleanup, render } from "react-testing-library";

import React from "react";
import SidebarMenuItem from "./SidebarMenuItem";

afterEach(cleanup);

const sampleText = "ABC";
const setup = () => render(<SidebarMenuItem text={sampleText} />);

describe("Sidebar Menu Item Component", () => {
  /**
   * Rendering content passed to its
   * text prop
   */
  it("Should render the text passed to its text prop", () => {
    const { getByText } = setup();
    expect(getByText(sampleText));
  });
});
