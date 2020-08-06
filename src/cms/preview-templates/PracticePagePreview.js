import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { create } from "jss";
import { jssPreset, StylesProvider } from "@material-ui/styles";
import theme from '../../gatsby-theme-material-ui-top-layout/theme';
import PracticePageTemplate from '../../components/practicePage'

class PracticePagePreview extends React.Component {
  state = {
    ready: false
  };

  handleRef = ref => {
    const ownerDocument = ref ? ref.ownerDocument : null;
    this.setState({
      ready: true,
      jss: create({
        ...jssPreset(),
        insertionPoint: ownerDocument ? ownerDocument.querySelector("#demo-frame-jss") : null
      }),
      sheetsManager: new Map()
    });
  };

  render() {
    const { entry } = this.props;
    const frontmatter = entry.get('data').toJS();
    const data = {
      markdownRemark: {
        id: 1,
        fields: {
          slug: 'edit-practice-page'
        },
        rawMarkdownBody: frontmatter.body,
        frontmatter,
      }
    }

    if (data) {
      return (
        <React.Fragment>
          <div id="demo-frame-jss" ref={this.handleRef} />
          {this.state.ready ? (
          <StylesProvider
            jss={this.state.jss}
            sheetsManager={this.state.sheetsManager}
          >
            <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <PracticePageTemplate
                preview={true}
                data={data}
              />
           </ThemeProvider>
          </StylesProvider>
        ) : null}
        </React.Fragment>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

export default PracticePagePreview
