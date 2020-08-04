import React from "react";
import {render, cleanup} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {MockedProvider} from "@apollo/react-testing";
import moment from "moment";
import ContributedBy from "../ContributedBy";

afterEach(cleanup);

const today = Date().now;
const todayInFormat = moment(today).format("MMMM D, YYYY");

const mockProps = {
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
  createdAt: today,
  updatedAt: today,
};

it("renders the createdAt and updatedAt dates", async () => {
  const {getByTestId} = render(
    <MockedProvider mocks={[]}>
      <ContributedBy {...mockProps} />
    </MockedProvider>
  );

  expect(getByTestId("dates")).toBeInTheDocument();
  expect(getByTestId("dates")).toHaveTextContent(
    "Published " + todayInFormat + " | Last edited " + todayInFormat);
});

