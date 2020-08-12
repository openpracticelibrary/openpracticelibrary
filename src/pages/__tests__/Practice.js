import React from "react";
import { render, waitFor, fireEvent } from "../../test-utils";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";
import Practice from "../Practice";
import { GET_PRACTICE_PAGE } from "../../graphql";

import LoginContext from "../../components/shared/Login/LoginContext";

const mockPracticeData = [
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
    authors: [{
      __typename: "UsersPermissionsUser",
      id: "aUs3r",
      firstName: "Mock",
      lastName: "User",
      mediaLink: "an.avatar.com",
      Avatar: "a.cool.avatar",
    }],
    body: {
      __typename: "ComponentPracticeBodyBody",
      whyDo: "# Just cause",
      whatIs: "# What it is",
      howTo: "# Just do it",
      fullText: "# lots of goodies"
    },
    createdAt: new Date(2020, 1, 1),
    updatedAt: new Date(2020, 6, 1),
    resources: [
      {
        __typename: "ComponentPracticeBodyResources",
        description: "cool link bro",
        linkType: "web",
        link: "a.really.cool.link"
      }
    ],
    upvotes: 42,
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
        answers: [{
          __typename: "Answers",
          answer: "Whenever you want",
          createdAt: new Date(2020, 5, 1),
          updatedAt: new Date(2020, 5, 1)
        }]
      },
    ],
  }
];

const apolloMocks = [
  {
    request: {
      query: GET_PRACTICE_PAGE,
      variables: {}
    },
    result: { data: { practices: mockPracticeData } }
  }
];

it("renders the practice content page with data", async () => {
  const { getByTestId, getByText, queryByTestId } = render(
    <MockedProvider mocks={apolloMocks}>
      <LoginContext.Provider value={false}>
        <Practice />
      </LoginContext.Provider>
    </MockedProvider>
  );

  expect(getByText("Washing our hands...")).toBeInTheDocument();

  await waitFor(() => expect(getByTestId("loginButton")).toBeInTheDocument());

  expect(getByTestId("loginButton")).toHaveTextContent("Login");

  expect(queryByTestId("editButton")).not.toBeInTheDocument();
});

it("renders the practice content page with data and a logged in user", async () => {
  const { getByTestId, getByText } = render(
    <MockedProvider mocks={apolloMocks}>
      <LoginContext.Provider value={true}>
        <Practice />
      </LoginContext.Provider>
    </MockedProvider>
  );

  expect(getByText("Washing our hands...")).toBeInTheDocument();

  await waitFor(() => expect(getByTestId("loginButton")).toBeInTheDocument());

  expect(getByTestId("loginButton")).toHaveTextContent("Logout");

  const edit = await getByTestId("editButton");

  fireEvent.click(edit);

  await waitFor(() => expect(getByTestId("closeEditButton")).toBeInTheDocument());
  expect(getByTestId("saveEditButton")).toBeInTheDocument();
});
