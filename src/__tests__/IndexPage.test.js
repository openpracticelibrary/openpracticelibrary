import React from "react";
import { render, screen } from "@testing-library/react";
import IndexPage from "../pages/index";

const mockData = {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            id: "1",
            fields: { slug: "/agile-practice/" },
            frontmatter: {
              title: "Agile Practice",
              subtitle: "Some description",
              tags: ["Agile"],
              mobiusTag: "Discover",
              icon: { childImageSharp: { gatsbyImageData: {} } },
              mediaGallery: [],
            },
          },
        },
      ],
    },
  },
};

describe("IndexPage", () => {
  test("renders homepage with main section heading", () => {
    render(<IndexPage {...mockData} />);
    const heading = screen.getByRole("heading", { name: /the mobius loop/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders at least one practice card", () => {
    render(<IndexPage {...mockData} />);
    const practiceTitle = screen.getByText(/agile practice/i);
    expect(practiceTitle).toBeInTheDocument();
  });
});
