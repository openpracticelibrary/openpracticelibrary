import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";

import QueryError from "../QueryError";

it("should render the error lottie for full pages", async () => {
  const { getByTestId } = render(
    <MockedProvider mocks={[]}>
      <QueryError err="fake error" />
    </MockedProvider>
  );
  expect(getByTestId("errorPage")).toBeInTheDocument();
});
