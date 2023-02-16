import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/styles";
import theme from "../../gatsby-theme-material-ui-top-layout/theme";
import PracticePageTemplate from "../../components/practicePage";

class PracticePagePreview extends React.Component {
  render() {
    const { entry } = this.props;
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

    if (data) {
      return (
        <React.Fragment>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <PracticePageTemplate preview={true} data={data} />
          </ThemeProvider>
        </React.Fragment>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default PracticePagePreview;
