import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "../components/Layout";

test("renders Layout with children", () => {
  render(<Layout><p>Test content</p></Layout>);
  expect(screen.getByText("Test content")).toBeInTheDocument();
});
