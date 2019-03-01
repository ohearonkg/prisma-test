import React from "react";
import { render, cleanup, fireEvent, wait } from "react-testing-library";
import UserDashboard from "./UserDashboard";

afterEach(cleanup);

const navigationItems = [
  "CREATE EXERCISE",
  "CREATE PROGRAM",
  "SCHEDULE PROGRAM"
];

const setup = () =>
  render(
    <UserDashboard
      navItems={navigationItems.map(navItem => ({ text: navItem }))}
    />
  );

describe("User Dashboard Page", () => {
  /**
   * Rendering Navigation
   */
  it("Should render the navigation items", () => {
    const { getByText } = setup();
    navigationItems.forEach(navItem => expect(getByText(navItem)));
  });

  /**
   * Rendering Navigation Item Title
   */
  it("Should render the appropriate title depending upon the navigation item the user selects", async () => {
    const { getByText, getAllByText } = setup();
    for (const navItem of navigationItems) {
      fireEvent.click(getByText(navItem));
      await wait(() => expect(getAllByText(navItem)).toHaveLength(2));
    }
  });

  /**
   * Rendering First Item as Default
   */
  it("Should render the first navigation item upon initial render", () => {
    const { getAllByText } = setup();
    expect(getAllByText(navigationItems[0])).toHaveLength(2);
  });
});
