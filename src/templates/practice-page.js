import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import PracticePage from "../components/practicePage";

const PracticePageWithData = (props) => (
  <Layout>
    <PracticePage
      data={props.data}
      {...props}
    />
  </Layout>
);

export default PracticePageWithData;

export const pageQuery = graphql`
  query PracticePageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      rawMarkdownBody
      fields {
        slug
      }
      frontmatter {
        title
        subtitle
        date(formatString: "MMMM DD, YYYY")
        authors {
          title
          github
        }
        area
        tags
        mobiusTag
        whatIs
        whyDo
        howTo
        mediaGallery {
          link
        }
        resources {
          link
          linkType
          description
        }
      }
    }
  }
`;

