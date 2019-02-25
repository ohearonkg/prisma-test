import { cleanup, fireEvent, render, wait } from "react-testing-library";

import { FIND_USER_QUERY } from "../../queries/FIND_USER_QUERY";
import { MockedProvider } from "react-apollo/test-utils";
import React from "react";
import Signup from "./Signup";

afterEach(cleanup);

/**
 * Variables used for tests
 */
const firstNameLabel = "First Name";
const lastNameLabel = "Last Name";
const emailLabel = "Email";
const passwordLabel = "Password";

const sampleFirstNameInput = "ABC";
const sampleLastNameInput = "DEF";
const sampleEmailInput = "GHI";
const samplePasswordInput = "JKL";
const sampleCreateUserFunction = jest.fn();

const errorText = `Account with email address ${sampleEmailInput} already exists`;

/**
 * Mock for query when the user
 * enters their input name
 */
const uniqueUsernameMock = [
  {
    request: {
      query: FIND_USER_QUERY,
      variables: {
        email: sampleEmailInput.toLowerCase() // Email is cast to lowercase when compared for uniqueness
      }
    },
    result: {
      data: {
        user: { id: "ABC" }
      }
    }
  }
];

const nonUniqueUsernameMock = [
  {
    request: {
      query: FIND_USER_QUERY,
      variables: {
        email: sampleEmailInput.toLowerCase() // Email is cast to lowercase when compared for uniqueness
      }
    },
    result: {
      data: {
        user: null
      }
    }
  }
];

const setupWithUniqueUsername = () =>
  render(
    <MockedProvider mocks={uniqueUsernameMock} addTypename={false}>
      <Signup createUserFunction={sampleCreateUserFunction} history={{}} />
    </MockedProvider>
  );

const setupWithoutUniqueUsername = () =>
  render(
    <MockedProvider mocks={nonUniqueUsernameMock} addTypename={false}>
      <Signup createUserFunction={sampleCreateUserFunction} history={{}} />
    </MockedProvider>
  );

describe("Signup Page", () => {
  /**
   * Rendering Signup Form
   */
  it("Should render a signup form", () => {
    const { getByLabelText, getByText } = setupWithUniqueUsername();
    expect(getByLabelText(firstNameLabel));
    expect(getByLabelText(lastNameLabel));
    expect(getByLabelText(emailLabel));
    expect(getByLabelText(passwordLabel));
    expect(getByText("Signup"));
  });

  /**
   * Updating form as user enters first name
   */
  it("Should update the value of its first name field as the user types within it", () => {
    const { getByLabelText, getByValue } = setupWithUniqueUsername();
    fireEvent.change(getByLabelText(firstNameLabel), {
      target: { value: sampleFirstNameInput }
    });
    expect(getByValue(sampleFirstNameInput));
  });

  /**
   * Updating form as user enters last name
   */
  it("Should update the value of its first name field as the user types within it", () => {
    const { getByLabelText, getByValue } = setupWithUniqueUsername();
    fireEvent.change(getByLabelText(lastNameLabel), {
      target: { value: sampleLastNameInput }
    });
    expect(getByValue(sampleLastNameInput));
  });

  /**
   * Updating form as user enters their
   */
  it("Should update the value of its email field as the user types within it", async () => {
    const { getByLabelText, getByValue } = setupWithUniqueUsername();
    fireEvent.change(getByLabelText(emailLabel), {
      target: { value: sampleEmailInput }
    });
    await wait(() => expect(getByValue(sampleEmailInput)));
  });

  /**
   * Error for username which is not unique
   */
  it("Should display an error should the user's email not be unqiue", async () => {
    const {
      getByLabelText,
      getByValue,
      getByText
    } = setupWithoutUniqueUsername();
    fireEvent.change(getByLabelText(emailLabel), {
      target: { value: sampleEmailInput }
    });
    await wait(() => expect(getByValue(sampleEmailInput)));
    expect(getByText(errorText));
  });

  /**
   * Updating form as user enters password
   */
  it("Should update the value of its password field as the user types within it", () => {
    const { getByLabelText, getByValue } = setupWithUniqueUsername();
    fireEvent.change(getByLabelText(passwordLabel), {
      target: { value: samplePasswordInput }
    });
    expect(getByValue(samplePasswordInput));
  });

  it("Should update the value of its password field as the user types within it", () => {
    const { getByLabelText, getByValue } = setupWithUniqueUsername();
    fireEvent.change(getByLabelText("Password"), {
      target: { value: samplePasswordInput }
    });
    expect(getByValue(samplePasswordInput));
  });
});
