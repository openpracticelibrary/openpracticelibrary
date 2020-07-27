import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";
import ResourceAddLink from '../ResourceAddLink';

afterEach(cleanup);

const mockLinkTypes = [
  "web",
  "podcast",
  "purchase"
];


it("renders login button and popover when clicked", async () => {
  const { getByTestId } = render(
    <MockedProvider mocks={[]}>
      <ResourceAddLink linkTypes={mockLinkTypes} />
    </MockedProvider>
  );

  expect(getByTestId("addResourcesButton")).toBeInTheDocument();
  expect(getByTestId("addResourcesButton")).toHaveTextContent("Add a link");

  fireEvent.click(getByTestId("addResourcesButton"));

  const popover = await getByTestId("addResourceForm");
  expect(popover).toHaveTextContent("Add a link you love!");
});

