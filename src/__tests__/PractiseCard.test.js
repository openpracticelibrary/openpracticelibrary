import React from "react";
import { render, screen } from "@testing-library/react";
import PracticeCard from "../components/shared/PracticeCards/PracticeCard";

test("renders PracticeCard with title", () => {
  render(
    <PracticeCard
      practiceTitle="Agile Practice"
      subtitle="Some description"
      to="/practice/agile"
      image={{
        images: {},
        layout: "constrained",
        width: 100,
        height: 100,
        alt: "mock image"
      }}
    />
  );

  expect(screen.getByText("Agile Practice")).toBeInTheDocument();
});
