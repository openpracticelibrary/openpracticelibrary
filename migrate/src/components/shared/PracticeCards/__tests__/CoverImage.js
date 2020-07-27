import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";

import CoverImage from "../CoverImage";

const mockPracticeCardProps = {
  practiceTitle: "A title",
  coverImage: "https://fake.url/an_image.jpeg",
  slug: "event-storming",
};

it("should render the practice detail card with props", async () => {
  const { getByTestId } = render(
    <MockedProvider mocks={[]}>
      <CoverImage {...mockPracticeCardProps} />
    </MockedProvider>
  );
  expect(getByTestId("coverimage")).toBeInTheDocument();
  expect(getByTestId("coverimage")).toHaveAttribute("alt", mockPracticeCardProps.practiceTitle);
  expect(getByTestId("coverimage")).toHaveAttribute("src", mockPracticeCardProps.coverImage);
});
