import React from "react";
import { render } from "../../../../test-utils";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";

import PracticeCardTitle from "../PracticeCardTitle";

const mockPracticeCardProps = {
  practiceTitle: "A title",
  slug: "event-storming",
  tags: [
    {
      tag: "discovery",
    },
    {
      tag: "value",
    },
  ],
};

it("should render the practice detail card with props", async () => {
  const { getByText, getByTestId } = render(
    <MockedProvider mocks={[]}>
      <PracticeCardTitle {...mockPracticeCardProps} />
    </MockedProvider>
  );
  expect(getByTestId("practicetitle")).toBeInTheDocument();
  expect(getByTestId("practicetitle")).toHaveTextContent("A title");
  expect(getByText("#discovery")).toBeInTheDocument();
  expect(getByText("#value")).toBeInTheDocument();
});
