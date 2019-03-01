import React from "react";
import { render, cleanup } from "react-testing-library";
import UserDashboard from "./UserDashboard";

afterEach(cleanup);

const navigationItems = [
  "CREATE EXERCISE",
  "CREATE PROGRAM",
  "SCHEDULE PROGRAM"
];

const setup = () => render(<UserDashboard />);

describe("User Dashboard Page", () => {
  /**
   * Rendering Navigation
   */
  it("Should render the navigation", () => {
    const { getByText } = setup();
    navigationItems.forEach(navItem => expect(getByText(navItem)));
  });
});
