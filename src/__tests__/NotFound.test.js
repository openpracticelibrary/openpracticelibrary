import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NotFound from "../pages/404";
import { navigate } from "gatsby";

jest.mock("gatsby", () => ({
  navigate: jest.fn(),
}));

jest.mock("lodash", () => ({
  random: jest.fn(() => 1),
}));

jest.mock("../components/shared/HeroColor", () => ({ children }) => (
  <div data-testid="hero-color">{children}</div>
));

describe("404 Page (NotFound)", () => {
  it("renders the 404 text", () => {
    render(<NotFound />);
    expect(screen.getByText(/404: Page Not Found/i)).toBeInTheDocument();
  });

  it("calls navigate(-1) when 'Head on Back' clicked", () => {
    render(<NotFound />);
    fireEvent.click(screen.getByText(/Head on Back/i));
    expect(navigate).toHaveBeenCalledWith(-1);
  });

  it("calls navigate('/') when 'Go Home' clicked", () => {
    render(<NotFound />);
    fireEvent.click(screen.getByText(/Go Home/i));
    expect(navigate).toHaveBeenCalledWith("/", { replace: true });
  });
});
