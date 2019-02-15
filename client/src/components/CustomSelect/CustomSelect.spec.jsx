import { cleanup, fireEvent, render } from "react-testing-library";

import CustomSelect from "./CustomSelect";
import React from "react";

const sampleOptions = ["A", "B", "C"];
const setup = () => render(<CustomSelect options={sampleOptions} />);

afterEach(cleanup);

describe("Custom Select", () => {
  /**
   * First value on render
   */
  it("Should render the first value upon initial render", () => {
    const { getByText } = setup();
    expect(getByText(sampleOptions[0]));
  });

  /**
   * Showing all values when clicked
   */
  it("Should show all possible values passed to the component's options prop when the user clicks on the select", () => {
    const { getByLabelText, getByText } = setup();
    fireEvent.click(getByLabelText("custom-select"));
    sampleOptions.forEach(option => expect(getByText(option)));
  });

  /**
   * Should close when the user makes a selection
   */
  it("Should close when the user makes a selection", async () => {
    const { queryAllByText, getByLabelText, getByText } = setup();
    fireEvent.click(getByLabelText("custom-select"));
    fireEvent.click(getByText(sampleOptions[1]));
    await expect(queryAllByText(sampleOptions[0])).toBeNull();
  });

  /**
   * Should display the selected value
   */
  it("Should display the selected value", () => {
    const { getByLabelText, getByText } = setup();
    fireEvent.click(getByLabelText("custom-select"));
    fireEvent.click(getByText(sampleOptions[1]));
    expect(getByText(sampleOptions[1]));
  });
});
