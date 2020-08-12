import React from "react";
import { render, fireEvent, waitFor } from "../../../../test-utils";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";

import PracticeCard from "../PracticeCard";

const mockPracticeCardProps = {
  practiceId: "5ec55c99d36579001355faae",
  practiceTitle: "A title",
  subtitle: "A subtitle",
  coverImage: "https://fake.url/an_image.jpeg",
  tags: [
    {
      tag: "discovery",
    },
    {
      tag: "value",
    },
  ],
  upvotes: 42,
  updatedAt: "2020-05-27T20:24:29.223Z",
  slug: "event-storming",
  mediaGallery: 2,
  ama: 1,
};

it("should render the practice detail card with props", async () => {
  const { getByTestId } = render(
    <MockedProvider mocks={[]}>
      <PracticeCard {...mockPracticeCardProps} />
    </MockedProvider>
  );
  expect(getByTestId("practicecard")).toBeInTheDocument();

  expect(getByTestId("expandedcard")).toHaveStyle("opacity: 0");

  fireEvent.mouseOver(getByTestId("practicecard"));

  waitFor(() => expect(getByTestId("expandedcard").toHaveStyle("opacity: 1")));
});
