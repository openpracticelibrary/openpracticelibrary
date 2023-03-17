import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import PracticePage from "../components/practicePage";

const PracticePageWithData = (props) => (
  <Layout
    ogContent={{
      title: props.data.markdownRemark.frontmatter.title,
      desc: props.data.markdownRemark.excerpt,
      image: props.data.markdownRemark.frontmatter.icon
        ? `https://openpracticelibrary.com${props.data.markdownRemark.frontmatter.icon}`
        : "https://openpracticelibrary.github.io/opl-media/images/opl-logo.png",
    }}
  >
    <PracticePage data={props.data} {...props} />
  </Layout>
);

export default PracticePageWithData;

export const pageQuery = graphql`
  query PracticePageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      rawMarkdownBody
      excerpt
      fields {
        slug
      }
      frontmatter {
        icon {
          childImageSharp {
            gatsbyImageData(width: 800, layout: CONSTRAINED)
          }
        }
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
