import React from "react";
import { render } from "../../../../test-utils";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";
import PracticeCardGrid from "../PracticeCardGrid"
import mockPracticeData from "../../../../testHelpers/mockPracticeData";

it("renders all mock practice data in cards", async () => {
  const { getByTestId } = render(
    <MockedProvider mocks={[]}>
      <PracticeCardGrid loading={false} practices={mockPracticeData} />
    </MockedProvider>
  );

  expect(getByTestId(`${mockPracticeData[0].id}`)).toBeInTheDocument();

  expect(getByTestId(`${mockPracticeData[8].id}`)).toBeInTheDocument();
});
