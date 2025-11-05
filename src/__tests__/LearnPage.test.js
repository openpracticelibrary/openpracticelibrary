import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Learn from "../pages/learn";


jest.mock("../components/shared/HeroImage", () => ({ children }) => <div>{children}</div>);
jest.mock("../components/shared/Logo", () => () => <div>Logo</div>);
jest.mock("../components/Learn/ProcessModel", () => () => <div>ProcessModel</div>);
jest.mock("../components/Learn/Explore", () => () => <div>Explore</div>);
jest.mock("../components/Learn/Partnerships", () => () => <div>Partnerships</div>);

beforeAll(() => {
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
});

describe("Learn Page", () => {
  it("renders key sections and button", () => {
    render(<Learn />);
    expect(screen.getByText(/Move past the buzzwords/i)).toBeInTheDocument();
    expect(screen.getByText("Explore")).toBeInTheDocument();
    expect(screen.getByText("Partnerships")).toBeInTheDocument();
  });

  it("renders Learn More button and allows click", () => {
    render(<Learn />);
    const btn = screen.getByRole("button", { name: /Learn More/i });
    fireEvent.click(btn);
 
    expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalled();
  });
});
