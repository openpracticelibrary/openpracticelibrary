import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";
import PhotoAndName from "../PhotoAndName";

afterEach(cleanup);

const mockProps = {
  authorName: 'test author'
};

it("renders the author name and photo", async () => {
  const { getByTestId } = render(
      <MockedProvider mocks={[]}>
        <PhotoAndName {...mockProps} />
      </MockedProvider>
  );

  expect(getByTestId("authorName")).toBeInTheDocument();
  expect(getByTestId("authorName")).toHaveTextContent("test author");
});

