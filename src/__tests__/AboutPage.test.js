import React from "react";
import { render, screen } from "@testing-library/react";
import About from "../pages/about";

jest.mock("../components/Layout", () => ({ children }) => <div>{children}</div>);
jest.mock("../components/shared/HeroColor", () => ({ children }) => <div>{children}</div>);
jest.mock("../components/About/HistoryValues", () => () => <div>HistoryValues</div>);
jest.mock("../components/About/ProductTeam", () => () => <div>ProductTeam</div>);
jest.mock("../components/About/Contributors", () => () => <div>Contributors</div>);

describe("About Page", () => {
  it("renders 'About Us' heading and all subcomponents", () => {
    render(<About />);
    expect(screen.getByTestId("hellotext")).toHaveTextContent("About Us");
    expect(screen.getByText("HistoryValues")).toBeInTheDocument();
    expect(screen.getByText("ProductTeam")).toBeInTheDocument();
    expect(screen.getByText("Contributors")).toBeInTheDocument();
  });
});
