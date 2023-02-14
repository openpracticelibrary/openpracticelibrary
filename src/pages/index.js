import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Practices from "../components/allPractices";
import SearchContainer from "../components/shared/Search/SearchContainer";
import { mobiusLoopArray } from "../utilities/dropDownValues";

const PracticesWithData = (props) => {
  const dataProps = {
    mobiusLoopArray,
    selectedMobiusLoopFilter: mobiusLoopArray[0],
  };

  const {
    data: {
      allMarkdownRemark: { edges },
    },
  } = props;

  return (
    <Layout
      ogContent={{
        title: "Open Practice Library",
        desc: "Practices that empower teams to collaborate and deliver iteratively",
        image:
          "https://openpracticelibrary.github.io/opl-media/images/opl-logo.png",
      }}
    >
      <Practices {...props} {...dataProps}>
        <SearchContainer practices={edges} />
      </Practices>
    </Layout>
  );
};

export default PracticesWithData;

export const pageQuery = graphql`
  query IndexPageTemplate {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "practice-page" } } }
      sort: { fields: frontmatter___title }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            tags
            mobiusTag
            icon {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            mediaGallery {
              link
            }
          }
        }
      }
    }
  }
`;
