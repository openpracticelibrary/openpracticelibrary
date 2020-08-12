import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";

import Subtitle from "../Subtitle";

const mockPracticeCardProps = {
  subtitle: "A subtitle for your title",
  slug: "event-storming",
};

it("should render the practice detail card with props", async () => {
  const { getByTestId } = render(
    <MockedProvider mocks={[]}>
      <Subtitle {...mockPracticeCardProps} />
    </MockedProvider>
  );
  expect(getByTestId("subtitle")).toBeInTheDocument();
  expect(getByTestId("subtitle")).toHaveTextContent("A subtitle for your title");
});
