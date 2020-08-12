import React from "react";
import { render, waitFor, fireEvent } from "../../test-utils";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";

import { GET_PRACTICES_BY_KEYWORD } from "../../graphql";
import AllPractices from "../AllPractices";

const mockPracticeDataPopularSorted = [
  {
    __typename: "Practice",
    id: "5ec55c99d36579001355faae",
    title: "A title",
    subtitle: "A subtitle",
    coverImage: "https://fake.url/an_image.jpeg",
    tags: [
      {
        __typename: "Tags",
        tag: "discovery",
      },
      {
        __typename: "Tags",
        tag: "value",
      },
    ],
    upvotes: 42,
    updatedAt: "2020-05-27T20:24:29.223Z",
    slug: "event-storming",
    mediaGallery: [
      {
        __typename: "ComponentPracticeBodyMediaGallery",
        link: "https://a.picture",
      },
      {
        __typename: "ComponentPracticeBodyMediaGallery",
        link: "https://a.video.thumbnail",
      },
    ],
    ama: [
      {
        __typename: "Questions",
        question: "When do I do this?",
      },
    ],
    curated: 1,
  },
  {
    __typename: "Practice",
    id: "5ec55c99d36579001375faae",
    title: "Title 2",
    subtitle: "A subtitle",
    coverImage: "https://fake.url/an_image.jpeg",
    tags: [
      {
        __typename: "Tags",
        tag: "foundation",
      },
      {
        __typename: "Tags",
        tag: "value",
      },
    ],
    upvotes: 39,
    updatedAt: "2020-05-27T20:24:29.223Z",
    slug: "impact-mapping",
    mediaGallery: [
      {
        __typename: "ComponentPracticeBodyMediaGallery",
        link: "https://a.picture",
      },
      {
        __typename: "ComponentPracticeBodyMediaGallery",
        link: "https://a.video.thumbnail",
      },
    ],
    ama: [
      {
        __typename: "Questions",
        question: "When do I do this?",
      },
    ],
    curated: 3,
  },
];

const mockPracticeDataCuratedSorted = [
  {
    __typename: "Practice",
    id: "5ec55c99d36579001375faae",
    title: "Title 2",
    subtitle: "A subtitle",
    coverImage: "https://fake.url/an_image.jpeg",
    tags: [
      {
        __typename: "Tags",
        tag: "foundation",
      },
      {
        __typename: "Tags",
        tag: "value",
      },
    ],
    upvotes: 39,
    updatedAt: "2020-05-27T20:24:29.223Z",
    slug: "impact-mapping",
    mediaGallery: [
      {
        __typename: "ComponentPracticeBodyMediaGallery",
        link: "https://a.picture",
      },
      {
        __typename: "ComponentPracticeBodyMediaGallery",
        link: "https://a.video.thumbnail",
      },
    ],
    ama: [
      {
        __typename: "Questions",
        question: "When do I do this?",
      },
    ],
    curated: 3,
  },
  {
    __typename: "Practice",
    id: "5ec55c99d36579001355faae",
    title: "A title",
    subtitle: "A subtitle",
    coverImage: "https://fake.url/an_image.jpeg",
    tags: [
      {
        __typename: "Tags",
        tag: "discovery",
      },
      {
        __typename: "Tags",
        tag: "value",
      },
    ],
    upvotes: 42,
    updatedAt: "2020-05-27T20:24:29.223Z",
    slug: "event-storming",
    mediaGallery: [
      {
        __typename: "ComponentPracticeBodyMediaGallery",
        link: "https://a.picture",
      },
      {
        __typename: "ComponentPracticeBodyMediaGallery",
        link: "https://a.video.thumbnail",
      },
    ],
    ama: [
      {
        __typename: "Questions",
        question: "When do I do this?",
      },
    ],
    curated: 5,
  },
];

const mockPracticeCountData = {
  __typename: "PracticeConnection",
  aggregate: {
    __typename: "PracticeAggregator",
    totalCount: 107,
  },
};

const apolloMocks = [
  {
    request: {
      query: GET_PRACTICES_BY_KEYWORD,
      variables: {
        start: 0,
        limit: 20,
        sort: "upvotes:DESC",
        tag: [],
        keyword: [],
      },
    },
    result: {
      data: {
        practicesByKeyword: mockPracticeDataPopularSorted,
        practicesConnection: mockPracticeCountData,
      },
    },
  },
  {
    request: {
      query: GET_PRACTICES_BY_KEYWORD,
      variables: {
        start: 0,
        limit: 20,
        sort: "curated:ASC",
        tag: [],
        keyword: [],
      },
    },
    result: {
      data: {
        practicesByKeyword: mockPracticeDataCuratedSorted,
        practicesConnection: mockPracticeCountData,
      },
    },
  },
  {
    request: {
      query: GET_PRACTICES_BY_KEYWORD,
      variables: {
        start: 0,
        limit: 20,
        sort: "createdAt:DESC",
        tag: [],
        keyword: [],
      },
    },
    result: {
      data: {
        practicesByKeyword: mockPracticeDataPopularSorted,
        practicesConnection: mockPracticeCountData,
      },
    },
  },
];

describe("renders with graphql response", () => {
  it("renders with graphql response", async () => {
    const { getByText, getByTestId } = render(
      <MockedProvider mocks={apolloMocks}>
        <AllPractices />
      </MockedProvider>
    );

    expect(getByTestId("loadingComponent")).toBeInTheDocument();

    // wait for response to load
    await waitFor(() => expect(getByText("A title")).toBeInTheDocument());
    await waitFor(() => expect(getByText("Title 2")).toBeInTheDocument());
  });

  it("sorts practices by popularity filter", async () => {
    const { getByText, getByTestId } = render(
      <MockedProvider mocks={apolloMocks}>
        <AllPractices />
      </MockedProvider>
    );

    // wait for response to load
    await waitFor(() => expect(getByText("A title")).toBeInTheDocument());
    await waitFor(() => expect(getByText("Title 2")).toBeInTheDocument());
    const popularFilter = getByTestId("popularFilterButton");
    expect(popularFilter).toHaveTextContent("Popular");

    // verify the order of the practice cards sorted by popularity
    const cardGrid = getByTestId("practicecardgrid");
    const children = cardGrid.children;
    expect(children.length).toEqual(2);
    expect(children.item(0).getAttribute("data-testid")).toEqual(
      "5ec55c99d36579001355faae"
    );
    expect(children.item(1).getAttribute("data-testid")).toEqual(
      "5ec55c99d36579001375faae"
    );

    //re-order by curated
    expect(getByTestId("popularFilterComponent")).toBeInTheDocument();
    fireEvent.click(popularFilter);
    await waitFor(() =>
      expect(getByTestId("popularFilterMenu")).toBeInTheDocument()
    );
    const curatedMenuItem = getByTestId("Curated");
    fireEvent.click(curatedMenuItem);

    // wait for response to load
    await waitFor(() => expect(getByText("A title")).toBeInTheDocument());
    await waitFor(() => expect(getByText("Title 2")).toBeInTheDocument());
    expect(popularFilter).toHaveTextContent("Curated");

    // verify the order of the practice cards sorted by popularity
    const cardGridCurated = getByTestId("practicecardgrid");
    const childrenCurated = cardGridCurated.children;
    expect(childrenCurated.length).toEqual(2);
    expect(childrenCurated.item(0).getAttribute("data-testid")).toEqual(
      "5ec55c99d36579001375faae"
    );
    expect(children.item(1).getAttribute("data-testid")).toEqual(
      "5ec55c99d36579001355faae"
    );

    //re-order by newest
    expect(getByTestId("popularFilterComponent")).toBeInTheDocument();
    fireEvent.click(popularFilter);
    await waitFor(() =>
      expect(getByTestId("popularFilterMenu")).toBeInTheDocument()
    );
    const newestMenuItem = getByTestId("Newest");
    fireEvent.click(newestMenuItem);

    // wait for response to load
    await waitFor(() => expect(getByText("A title")).toBeInTheDocument());
    await waitFor(() => expect(getByText("Title 2")).toBeInTheDocument());
    expect(popularFilter).toHaveTextContent("Newest");

    // verify the order of the practice cards sorted by popularity
    const cardGridNewest = getByTestId("practicecardgrid");
    const childrenNewest = cardGridNewest.children;
    expect(childrenNewest.length).toEqual(2);
    expect(childrenNewest.item(0).getAttribute("data-testid")).toEqual(
      "5ec55c99d36579001355faae"
    );
    expect(children.item(1).getAttribute("data-testid")).toEqual(
      "5ec55c99d36579001375faae"
    );
  });
});
