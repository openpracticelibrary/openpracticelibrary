import React from "react";
import { cleanup, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";
import ContributorCount from '../ContributorCount';

import { GET_CONTRIBUTORS } from "../../../graphql";

afterEach(cleanup);

const mockContributorData = {
  __typename: "UsersPermissionsUserConnection",
  aggregate: {
    __typename: "UsersPermissionsUserAggregator",
    totalCount: 50,
  }
};

const apolloMocks = [
  {
    request: {
      query: GET_CONTRIBUTORS
    },
    result: { data: { usersConnection: mockContributorData } }
  },
];

it("renders contributor count successfully", async () => {
  const { getByTestId } = render(
    <MockedProvider mocks={apolloMocks}>
      <ContributorCount />
    </MockedProvider>
  );

  await waitFor(() => expect(getByTestId("contributorNum")).toBeInTheDocument());
  expect(getByTestId("contributorNum")).toHaveTextContent("50");
});

