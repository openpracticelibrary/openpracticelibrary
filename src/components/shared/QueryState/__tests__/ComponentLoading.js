import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";

import ComponentLoading from "../ComponentLoading";

it("should render the loading lottie for components", async () => {
  const { getByTestId } = render(
    <MockedProvider mocks={[]}>
      <ComponentLoading />
    </MockedProvider>
  );
  expect(getByTestId("loadingComponent")).toBeInTheDocument();
});
