import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";

import Loading from "../Loading";

it("should render the loading lottie for full pages", async () => {
  const { getByTestId } = render(
    <MockedProvider mocks={[]}>
      <Loading />
    </MockedProvider>
  );
  expect(getByTestId("loadingPage")).toBeInTheDocument();
});
