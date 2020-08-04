import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import theme from '../../gatsby-theme-material-ui-top-layout/theme';
import PracticePageTemplate from '../../components/practicePage'

const PracticePagePreview = ({ entry }) => {
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
  console.log(data);
  return (
    <ThemeProvider theme={theme}>
    <PracticePageTemplate
      data={data}
    />
    </ThemeProvider>
  )
};

export default PracticePagePreview
