import React from "react";
import MobiusLoopHero from "../";
import { render } from "@testing-library/react";

describe("<MobiusLoopHero /> :", () => {
  it("should render the ALL content default", () => {
    const { getByTestId } = render(<MobiusLoopHero />);
    expect(getByTestId("mobius-display-all")).toBeInTheDocument();
  });
  it("should render the OVERVIEW content if all is passed", () => {
    const { getByTestId } = render(<MobiusLoopHero displaySection="all" />);
    expect(getByTestId("mobius-display-all")).toBeInTheDocument();
  });
  it("should render the FOUNDATION content that prop is passed", () => {
    const { getByTestId } = render(
      <MobiusLoopHero displaySection="foundation" />
    );
    expect(getByTestId("mobius-display-foundation")).toBeInTheDocument();
  });
  it("should render the DISCOVERY content that prop is passed", () => {
    const { getByTestId } = render(
      <MobiusLoopHero displaySection="discovery" />
    );
    expect(getByTestId("mobius-display-discovery")).toBeInTheDocument();
  });
  it("should render the OPTIONS content that prop is passed", () => {
    const { getByTestId } = render(<MobiusLoopHero displaySection="options" />);
    expect(getByTestId("mobius-display-options")).toBeInTheDocument();
  });
  it("should render the DELIVERY content that prop is passed", () => {
    const { getByTestId } = render(
      <MobiusLoopHero displaySection="delivery" />
    );
    expect(getByTestId("mobius-display-delivery")).toBeInTheDocument();
  });
});
