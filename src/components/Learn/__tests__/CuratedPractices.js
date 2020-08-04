import React from "react";
import { cleanup, render, waitFor } from "../../../test-utils";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";
import CuratedPractices from '../CuratedPractices';

import { GET_CURATED_PRACTICES } from "../../../graphql";
import mockPracticeData from "../../../testHelpers/mockPracticeData";

afterEach(cleanup);

const apolloMocks = [
  {
    request: {
      query: GET_CURATED_PRACTICES,
      variables: {
        sort: "upvotes:desc"
      }
    },
    result: { data: { practices: mockPracticeData } }
  },
];

it("renders curated practice list properly", async () => {
  const { getByTestId, getAllByTestId } = render(
    <MockedProvider mocks={apolloMocks} addTypename={false}>
      <CuratedPractices />
    </MockedProvider>
  );
  expect(getByTestId("curatedList")).toBeInTheDocument()
  await waitFor(() => expect(getAllByTestId("practicecard")).toHaveLength(9));
});

