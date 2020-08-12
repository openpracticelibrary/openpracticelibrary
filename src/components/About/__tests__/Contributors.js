import React from "react";
import { cleanup, render, waitFor } from "../../../test-utils";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";
import Contributors from "../Contributors";

import { GET_PRACTICE_COUNT, GET_CONTRIBUTORS } from "../../../graphql";

afterEach(cleanup);

const mockPracticeData = {
  __typename: "PracticeConnection",
  aggregate: {
    __typename: "PracticeAggregator",
    totalCount: 107
  }
};

const mockContributorData = {
  __typename: "UsersPermissionsUserConnection",
  aggregate: {
    __typename: "UsersPermissionsUserAggregator",
    totalCount: 50
  }
};

const apolloMocks = [
  {
    request: {
      query: GET_PRACTICE_COUNT,
      variables: {}
    },
    result: { data: { practicesConnection: mockPracticeData } }
  },
  {
    request: {
      query: GET_CONTRIBUTORS
    },
    result: { data: { usersConnection: mockContributorData } }
  }
];

it("renders Community section properly", async () => {
  const { getByTestId } = render(
    <MockedProvider mocks={apolloMocks}>
      <Contributors />
    </MockedProvider>
  );

  await waitFor(() => expect(getByTestId("practiceNum")).toBeInTheDocument());
  expect(getByTestId("communityHeader")).toBeInTheDocument();
});
