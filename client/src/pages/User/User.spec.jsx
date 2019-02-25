import { cleanup, render, waitForElement } from "react-testing-library";

import { GET_USER_PROFILE_QUERY } from "../../queries/GET_USER_PROFILE_QUERY";
import { MockedProvider } from "react-apollo/test-utils";
import React from "react";
import User from "./User";

afterEach(cleanup);

const sampleUserId = "ABC";
const sampleFirstname = "FIRSTNAME";
const sampleLastname = "LASTNAME";

const mocks = [
  {
    request: {
      query: GET_USER_PROFILE_QUERY,
      variables: {
        id: sampleUserId
      }
    },
    result: {
      data: {
        userProfile: { firstname: sampleFirstname, lastname: sampleLastname }
      }
    }
  }
];

const setup = () =>
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <User userId={sampleUserId} />
    </MockedProvider>
  );

describe("User Page", () => {
  /**
   * Displaying the user's first and last name
   */
  it("Should render the user's firstname and lastname", async () => {
    const { getByText } = setup();
    await waitForElement(() => [
      expect(getByText(sampleFirstname, { exact: false })),
      expect(getByText(sampleLastname, { exact: false }))
    ]);
  });
});
