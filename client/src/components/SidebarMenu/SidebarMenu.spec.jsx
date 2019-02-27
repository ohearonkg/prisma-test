import { cleanup, render } from "react-testing-library";

import React from "react";
import SidebarMenu from "./SidebarMenu";

afterEach(cleanup);

const sampleText = "HOME";
const SampleIcon = () => (
  <svg width="100" height="100">
    <circle cx="50" cy="50" r="40" stroke="green" fill="yellow" />
  </svg>
);

const sampleMenuItems = [
  {
    text: sampleText,
    icon: <SampleIcon />,
    onClickFunction: jest.fn()
  }
];

const setup = () => render(<SidebarMenu menuItems={sampleMenuItems} />);

describe("Sidebar Menu Component", () => {
  /**
   * Displaying a list of menu item
   */
  it("Should display a list of <SidebarMenuItem /> components, with one for each item passed to its menuItems props", () => {
    const { getByText, container, debug } = setup();
    expect(getByText(sampleText));
    expect(container.querySelectorAll("svg")).toHaveLength(1);
  });
});
