import React from "react";
import {cleanup, render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {MockedProvider} from "@apollo/react-testing";
import renderer from 'react-test-renderer';
import PageIntro from '../index';

afterEach(cleanup);

const date = new Date(2020,6,8);

const mockProps = {
  title: "This is a test title",
  subtitle: "A subtitle for your title",
  slug: "event-storming",
  authors: [
    {
      firstName: "Tim",
      id: "5ec55d3bd36579001355faee",
      lastName: "Beattie",
      mediaLink: "https://github.com/tdbeattie",
    },
    {
      firstName: "Matt",
      id: "5ec55d09d36579001355faed",
      lastName: "Takane",
      mediaLink: "https://github.com/mtakane",
    }
  ],
  createdAt: date,
  updatedAt: date,
  practiceId: "aFak3ID4y0U",
  upvotes: 42,
  imgCount: 3,
  questions: 5,
};

it("renders Page Introduction without crashing", () => {
  render(
    <MockedProvider mocks={[]}>
      <PageIntro {...mockProps} />
    </MockedProvider>
  );
});

it("matches the snapshot", () => {
  const tree = renderer.create(
    <MockedProvider mocks={[]}>
      <PageIntro {...mockProps} />
    </MockedProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
