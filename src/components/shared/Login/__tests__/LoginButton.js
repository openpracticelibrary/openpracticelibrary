import React from "react";
import { cleanup, render, fireEvent } from "../../../../test-utils";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";
import LoginButton from '../LoginButton';

afterEach(cleanup);

it("renders login button and popover when clicked", async () => {
  const { getByTestId } = render(
    <MockedProvider mocks={[]}>
      <LoginButton />
    </MockedProvider>
  );

  expect(getByTestId("loginButton")).toBeInTheDocument();
  expect(getByTestId("loginButton")).toHaveTextContent("Login");

  fireEvent.click(getByTestId("loginButton"));

  const popover = await getByTestId("loginForm");
  expect(popover).toHaveTextContent("Credentials Please?");
});

