import React from "react";
import {cleanup, render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {MockedProvider} from "@apollo/react-testing";
import renderer from 'react-test-renderer';
import PageBody from '../index';

afterEach(cleanup);

const mockProps = {
  id: "5ec55c99d36579001355faae",
  title: "Test title",
  body: {
    whyDo: "Why do test",
    whatIs: "What is test",
    howTo: "how to test",
    fullText: 'full text test',
  },
  ama: [
    {
      question: "When do I do this?",
      answers: [{
        answer: "Test answer 1",
        createdAt: "2020-05-27T20:24:29.223Z",
        updatedAt: "2020-05-27T20:24:29.223Z"
      }]
    },
  ],
  resources: [{
    description: "Test desc",
    linkType: "web",
    link: "https://test.com"
  }],
  mediaGallery: [{
    link: "https://test.com"
  }],
};

it("renders Page Body without crashing", () => {
  render(
      <MockedProvider mocks={[]}>
        <PageBody {...mockProps} />
      </MockedProvider>
  );
});

it("matches the snapshot", () => {
  const tree = renderer.create(
      <MockedProvider mocks={[]}>
        <PageBody {...mockProps} />
      </MockedProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});