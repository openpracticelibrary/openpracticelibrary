import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";

import ComponentQueryError from "../ComponentQueryError";

it("should render the error lottie for components", async () => {
  const { getByTestId } = render(
    <MockedProvider mocks={[]}>
      <ComponentQueryError err="fake error" />
    </MockedProvider>
  );
  expect(getByTestId("errorComponent")).toBeInTheDocument();
});
