import { cleanup, fireEvent, render } from "react-testing-library";

import Card from "./Card";
import React from "react";

afterEach(cleanup);

const sampleText = "ABC";
const sampleOnClickFunction = jest.fn();

const setup = () =>
  render(
    <Card onClickFunction={sampleOnClickFunction}>
      <div>{sampleText}</div>
    </Card>
  );

describe("Card Component", () => {
  /**
   * Rendering children
   */
  it("Should render any children passed to it", () => {
    const { getByText } = setup();
    expect(getByText(sampleText));
  });

  /**
   * Calling onClickFunction when clicked
   */
  it("Should call its onClickFunction when clicked upon", () => {
    const { getByText } = setup();
    fireEvent.click(getByText(sampleText));
    expect(sampleOnClickFunction).toHaveBeenCalledTimes(1);
  });
});
