import React, { useMemo } from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/styles";
import theme from "../../gatsby-theme-material-ui-top-layout/theme";
import PracticePageTemplate from "../../components/practicePage";

const PracticePagePreview = ({ document, entry }) => {
  const frontmatter = entry.get("data").toJS();
  const data = {
    markdownRemark: {
      id: 1,
      fields: {
        slug: "edit-practice-page",
      },
      rawMarkdownBody: frontmatter.body,
      frontmatter,
    },
  };

  const documentHead = document.querySelector("head");

  // Ensure documentHead is available before proceeding
  if (!documentHead) {
    return <div>Loading preview environment...</div>;
  }

  const cache = useMemo(
    () =>
      createCache({
        key: "preview",
        container: documentHead,
        prepend: true, // Ensures MUI styles are injected first
      }),
    [documentHead] // documentHead itself should be stable within the iframe's lifecycle
  );

  // Ensure both data and frontmatter are available
  if (data && frontmatter) {
    return (
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <PracticePageTemplate preview={true} data={data} />
        </ThemeProvider>
      </CacheProvider>
    );
  } else {
    // More informative loading/error message
    return <div>Loading preview data or encountered an issue with frontmatter...</div>;
  }
};

export default PracticePagePreview;
