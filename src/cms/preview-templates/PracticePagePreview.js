import React, { useMemo } from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeProvider as LegacyThemeProvider } from "@mui/styles";
import theme from "../../gatsby-theme-material-ui-top-layout/theme";
import PracticePageTemplate from "../../components/practicePage";

const PracticePagePreview = ({ document, entry }) => {
  const documentHead = document ? document.querySelector("head") : null;

  const cache = useMemo(
    () =>
      documentHead
        ? createCache({
            key: "preview",
            container: documentHead,
            prepend: true,
          })
        : null,
    [documentHead]
  );

  if (!documentHead || !cache) {
    return <div>Loading preview environment...</div>;
  }

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

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <LegacyThemeProvider theme={theme}>
          <CssBaseline />
          <PracticePageTemplate preview={true} data={data} />
        </LegacyThemeProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default PracticePagePreview;
