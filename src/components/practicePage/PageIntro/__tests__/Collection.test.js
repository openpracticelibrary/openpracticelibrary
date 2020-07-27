import React from "react";
import {cleanup, fireEvent, render, waitFor} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {MockedProvider} from "@apollo/react-testing";
import Collection from "../Collection";
import {LIKE_PRACTICE} from "../../../../graphql";

afterEach(cleanup);

const mockProps = {
  practiceId: "aFak3ID4y0U",
  upvotes: 42,
  imgCount: 3,
  questions: 5,
};

it("renders collection items", async () => {
  const {getByTestId} = render(
      <MockedProvider mocks={[]}>
        <Collection {...mockProps} />
      </MockedProvider>
  );
  expect(getByTestId("heartIcon")).toBeInTheDocument();

});

it("modifies upvotes when mutation is run", async () => {
  let practiceLiked = false;
  const likedPractice = {
    data: {
      updatePractice: {
        __typename: "updatePracticePayload",
        practice: {
          __typename: "Practice",
          id: "aFak3ID4y0U",
          upvotes: 43,
        },
      },
    },
  };

  const apolloMocks = [
    {
      request: {
        query: LIKE_PRACTICE,
        variables: {practiceId: "aFak3ID4y0U", upvotes: 43},
      },
      result: () => {
        practiceLiked = true;
        return likedPractice;
      },
    },
  ];

  const {getByTestId} = render(
      <MockedProvider mocks={apolloMocks}>
        <Collection {...mockProps}/>
      </MockedProvider>
  );

  expect(getByTestId("heartIcon")).toHaveTextContent("42");
  fireEvent.click(getByTestId("heartIcon"));
  await waitFor(() => expect(practiceLiked).toBe(true));
});