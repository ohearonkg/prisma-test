import "jest-dom/extend-expect";

import { cleanup, fireEvent, getByRole, render } from "react-testing-library";

import React from "react";
import SidebarMenuItem from "./SidebarMenuItem";

afterEach(cleanup);

const sampleText = "ABC";
const sampleOnClickFunction = jest.fn();
const SampleIcon = () => (
  <svg width="100" height="100">
    <circle cx="50" cy="50" r="40" stroke="green" fill="yellow" />
  </svg>
);

const setup = () =>
  render(
    <SidebarMenuItem
      text={sampleText}
      onClickFunction={sampleOnClickFunction}
      icon={<SampleIcon />}
    />
  );

describe("Sidebar Menu Item Component", () => {
  /**
   * Rendering content passed to its
   * text prop
   */
  it("Should render the text passed to its text prop", () => {
    const { getByText } = setup();
    expect(getByText(sampleText));
  });

  /**
   * Rendering SVG provided
   */
  it("Should render the icon provided", () => {
    const { container } = setup();
    expect(container.querySelectorAll("svg")).toHaveLength(1);
  });

  /**
   * calling onClickFunction
   */
  it("Should call its onClickFunction when clicked", () => {
    const { getByText } = setup();
    fireEvent.click(getByText(sampleText));
    expect(sampleOnClickFunction).toHaveBeenCalledTimes(1);
  });
});
