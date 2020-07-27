import React from "react";
import { render, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer';
import "@testing-library/jest-dom/extend-expect";
import BodyFooter from '../index';

afterEach(cleanup);

it("renders BodyFooter without crashing", ()=>{
  const div = document.createElement("div");
  render(<BodyFooter/>, div);
});

it("renders BodyFooter correctly", ()=>{
  const { getByTestId } = render(<BodyFooter/>);
  expect(getByTestId("footer")).toBeInTheDocument();
});

it("renders children components correctly", ()=>{
  const { getByTestId } = render(<BodyFooter/>);
  expect(getByTestId("connect")).toHaveTextContent("Please connect with us:");
  expect(getByTestId("poweredBy")).toHaveTextContent("powered by");
});

it("matches the snapshot", ()=>{
  const tree = renderer.create(<BodyFooter/>).toJSON();
  expect(tree).toMatchSnapshot();
});
