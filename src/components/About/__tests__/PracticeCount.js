import React from "react";
import { cleanup, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";
import PracticeCount from "../PracticeCount";

import { GET_PRACTICE_COUNT } from "../../../graphql";

afterEach(cleanup);

const mockPracticeData = {
  __typename: "PracticeConnection",
  aggregate: {
    __typename: "PracticeAggregator",
    totalCount: 107
  }
};

const apolloMocks = [
  {
    request: {
      query: GET_PRACTICE_COUNT
    },
    result: { data: { practicesConnection: mockPracticeData } }
  }
];

it("renders contributor count successfully", async () => {
  const { getByTestId } = render(
    <MockedProvider mocks={apolloMocks}>
      <PracticeCount />
    </MockedProvider>
  );

  await waitFor(() => expect(getByTestId("practiceNum")).toBeInTheDocument());
  expect(getByTestId("practiceNum")).toHaveTextContent("107");
});
