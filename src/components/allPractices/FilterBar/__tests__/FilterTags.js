import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";
import FilterTags from "../FilterTags";

it("should render all the tags passed to the component", () => {
  const filterTags = [
    "ALL",
    "VALIDATE",
    "VALUE",
    "INSIGHT",
    "IDEATE",
    "BUILD",
    "ANALYZE",
    "METHODS",
    "CULTURE",
  ];

  const { getByTestId } = render(
    <MockedProvider mocks={[]}>
      <FilterTags tags={filterTags} selectedFilter="ALL" />
    </MockedProvider>
  );

  expect(getByTestId("filterTags")).toBeInTheDocument();
});
