import { cleanup, fireEvent, render } from "react-testing-library";

import Button from "./Button";
import React from "react";

const sampleOnClickFunction = jest.fn();
const sampleText = "BUTTON_TEXT";

const setup = () =>
  render(<Button onClickFunction={sampleOnClickFunction}>{sampleText}</Button>);

afterEach(cleanup);

describe("Button", () => {
  /**
   * Displaying children
   */
  it("Should dispaly any children", () => {
    const { getByText } = render(
      <Button>
        {" "}
        <div>{sampleText}</div>
      </Button>
    );
    expect(getByText(sampleText));
  });

  /**
   * Option callback
   */
  it("Should call its the function passed to its onClickFunction if provided when the button is clicked", () => {
    const { getByText } = setup();
    fireEvent.click(getByText(sampleText));
    expect(sampleOnClickFunction).toHaveBeenCalledTimes(1);
  });
});
