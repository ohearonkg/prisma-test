import React from "react";
import { render, cleanup, fireEvent, wait } from "react-testing-library";
import UserDashboard from "./UserDashboard";

afterEach(cleanup);

const sampleNavItems = [
  {
    text: "CREATE EXERCISE",
    component: <div>CREATE EXERCISE DIV</div>
  },
  {
    text: "CREATE PROGRAM",
    component: <div>CREATE PROGRAM DIV </div>
  },
  {
    text: "SCHEDULE PROGRAM",
    component: <div>SCHEDULE PROGRAM DIV </div>
  }
];

const setup = () => render(<UserDashboard navItems={sampleNavItems} />);

describe("User Dashboard Page", () => {
  /**
   * Rendering Navigation
   */
  it("Should render the navigation items", () => {
    const { getByText } = setup();
    sampleNavItems.forEach(navItem => expect(getByText(navItem.text)));
  });

  /**
   * Rendering First Item as Default
   */
  it("Should render the first navigation item's content upon initial render", () => {
    const { getByText } = setup();
    expect(getByText(`${sampleNavItems[0].text} DIV`));
  });

  /**
   * Rendering Navigation Item Title
   */
  it("Should render the appropriate content depending upon the navigation item the user selects", async () => {
    const { getByText } = setup();
    for (const navItem of sampleNavItems) {
      fireEvent.click(getByText(navItem.text));
      await wait(() => expect(getByText(`${navItem.text} DIV`)));
    }
  });
});
