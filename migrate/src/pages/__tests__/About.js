import React from "react";
import { cleanup, render } from "../../test-utils";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";
import About from "../About";

afterEach(cleanup);

it("matches the About page snapshot", () => {
  const { asFragment } = render(
    <MockedProvider mocks={[]}>
      <About />
    </MockedProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});
