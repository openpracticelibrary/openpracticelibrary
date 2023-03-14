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
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
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
