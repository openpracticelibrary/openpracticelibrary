import React, { useMemo } from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/styles";
import theme from "../../gatsby-theme-material-ui-top-layout/theme";
import PracticePageTemplate from "../../components/practicePage";

const PracticePagePreview = ({ document, entry }) => {
  const frontmatter = entry.get("data").toJS();
  
  // Sanitize author and cover image fields
  let coverImage = null;
  if (frontmatter.coverImage) {
    if (typeof frontmatter.coverImage === "string") {
      coverImage = frontmatter.coverImage;
    } else if (frontmatter.coverImage.url) {
      coverImage = frontmatter.coverImage.url;
    } else if (frontmatter.coverImage.path) {
      coverImage = frontmatter.coverImage.path;
    } else if (frontmatter.coverImage.childImageSharp?.gatsbyImageData) {
      coverImage = frontmatter.coverImage.childImageSharp.gatsbyImageData;
    }
  }

  const authors = Array.isArray(frontmatter.authors)
    ? frontmatter.authors.map((a) =>
        typeof a === "string" ? { title: a.trim() } : a
      )
    : typeof frontmatter.authors === "string"
    ? frontmatter.authors
        .split(",")
        .map((a) => ({ title: a.trim() }))
    : [];

  const data = {
    markdownRemark: {
      id: 1,
      fields: {
        slug: "edit-practice-page",
      },
      rawMarkdownBody: frontmatter.body,
      frontmatter: {
        ...frontmatter,
        authors,
        coverImage,
      },
    },
  };

  const documentHead = document.querySelector("head");

  const cache = useMemo(
    () =>
      createCache({
        key: "preview",
        container: documentHead,
      }),
    [documentHead]
  );

  if (data) {
    return (
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstarts a consistent and simple baseline */}
          <CssBaseline />
          <PracticePageTemplate preview={true} data={data} />
        </ThemeProvider>
      </CacheProvider>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default PracticePagePreview;
