import { cleanup, fireEvent, render } from "react-testing-library";

import CustomSelect from "./CustomSelect";
import React from "react";

afterEach(cleanup);

const sampleOptions = ["A", "B", "C"];
const setup = () => render(<CustomSelect options={sampleOptions} />);

describe("Custom Select", () => {
  it("Should render the first value upon initial render", () => {
    const { getByText } = setup();
    expect(getByText(sampleOptions[0]));
  });
});
