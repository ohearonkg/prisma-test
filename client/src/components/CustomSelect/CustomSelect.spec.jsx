import { cleanup, fireEvent, render, wait } from "react-testing-library";

import CustomSelect from "./CustomSelect";
import React from "react";

const sampleOptions = ["A", "B", "C"];
const sampleValue = sampleOptions[0];
const sampleOnChangeFunction = jest.fn();

const setup = () =>
  render(
    <CustomSelect
      options={sampleOptions}
      value={sampleValue}
      onChangeFunction={sampleOnChangeFunction}
    />
  );

afterEach(cleanup);

describe("Custom Select", () => {
  /**
   * First value on render
   */
  it("Should render the string passed to its value prop", () => {
    const { getByText } = setup();
    expect(getByText(sampleValue));
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
    await wait(() => expect(queryAllByText(sampleOptions[2])).toEqual([]));
  });

  /**
   * Should call its onChangeFunction passing the user's selection
   */
  it("Should call its onChangeFunction passing the user's selection", () => {
    const { getByLabelText, getByText } = setup();
    fireEvent.click(getByLabelText("custom-select"));
    fireEvent.click(getByText(sampleOptions[1]));
    expect(sampleOnChangeFunction).toHaveBeenCalledWith(sampleOptions[1]);
  });

  /**
   * Should close should the user click upon their
   * currently displayed option
   */
  it("Should close should the user click for a upont their currently selected value", async () => {
    const { getByLabelText, getByText, queryAllByText } = setup();
    fireEvent.click(getByLabelText("custom-select"));
    fireEvent.click(getByText(sampleOptions[0]));
    await wait(() => expect(queryAllByText(sampleOptions[1])).toEqual([]));
    await wait(() => expect(queryAllByText(sampleOptions[2])).toEqual([]));
  });
});
