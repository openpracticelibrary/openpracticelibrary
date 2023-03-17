import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Practices from "../components/allPractices";
import SearchContainer from "../components/shared/Search/SearchContainer";
import { mobiusLoopArray } from "../utilities/dropDownValues";

const PracticesWithDataTags = (props) => {
  //make first letter of tag upper case (example: discovery => Discovery)
  const tag =
    props.pageContext.tag.charAt(0).toUpperCase() +
    props.pageContext.tag.slice(1);

  const dataProps = {
    mobiusLoopArray,
    selectedMobiusLoopFilter: tag,
  };

  const {
    data: {
      allMarkdownRemark: { edges },
    },
  } = props;

  return (
    <Layout
      ogContent={{
        title: tag,
        desc: `Practices under the ${tag} section of the mobius loop in the Open Practice Library`,
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

export default PracticesWithDataTags;

export const tagPageQuery = graphql`
  query TagPageTemplate($tag: String) {
    allMarkdownRemark(
      filter: { frontmatter: { mobiusTag: { eq: $tag } } }
      sort: { fields: { slug: ASC } }
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
                gatsbyImageData(width: 800, layout: CONSTRAINED)
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
