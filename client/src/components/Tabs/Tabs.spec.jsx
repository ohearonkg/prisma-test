import React from "react";
import { render, cleanup, fireEvent, wait } from "react-testing-library";
import Tabs from "./Tabs";

afterEach(cleanup);

const sampleTabs = [
  {
    title: "CREATE EXERCISE",
    component: <div>CREATE EXERCISE DIV</div>
  },
  {
    title: "CREATE PROGRAM",
    component: <div>CREATE PROGRAM DIV </div>
  },
  {
    title: "SCHEDULE PROGRAM",
    component: <div>SCHEDULE PROGRAM DIV </div>
  }
];

const setup = () => render(<Tabs tabs={sampleTabs} />);

describe("Tabs Component", () => {
  /**
   * Rendering Navigation
   */
  it("Should render the tab titles items", () => {
    const { getByText } = setup();
    sampleTabs.forEach(tab => expect(getByText(tab.title)));
  });

  /**
   * Rendering First Item as Default
   */
  it("Should render the first navigation item's content upon initial render", () => {
    const { getByText } = setup();
    expect(getByText(`${sampleTabs[0].title} DIV`));
  });

  /**
   * Rendering Navigation Item Title
   */
  it("Should render the appropriate content depending upon the navigation item the user selects", async () => {
    const { getByText } = setup();
    for (const tab of sampleTabs) {
      fireEvent.click(getByText(tab.title));
      await wait(() => expect(getByText(`${tab.title} DIV`)));
    }
  });
});
