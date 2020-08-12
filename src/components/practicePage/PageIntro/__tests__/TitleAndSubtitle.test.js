import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";
import TitleAndSubtitle from "../TitleAndSubtitle";

afterEach(cleanup);

const mockPracticeProps = {
  title: "This is a test title",
  subtitle: "A subtitle for your title",
  slug: "event-storming",
};

it("renders the practice title", async () => {
  const { getByTestId } = render(
      <MockedProvider mocks={[]}>
        <TitleAndSubtitle {...mockPracticeProps} />
      </MockedProvider>
  );
  expect(getByTestId("title")).toBeInTheDocument();
  expect(getByTestId("title")).toHaveTextContent("This is a test title");
});

it("renders the practice subtitle", async () => {
  const { getByTestId } = render(
      <MockedProvider mocks={[]}>
        <TitleAndSubtitle {...mockPracticeProps} />
      </MockedProvider>
  );
  expect(getByTestId("subtitle")).toBeInTheDocument();
  expect(getByTestId("subtitle")).toHaveTextContent("A subtitle for your title");
});
