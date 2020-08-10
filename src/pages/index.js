import React from "react";
import { graphql } from "gatsby";
import OplDrawer from "../components/shared/Drawer";
import Practices from "../components/allPractices";
import SearchContainer from "../components/shared/Search/SearchContainer";
import {
  mobiusLoopArray,
} from "../utilities/dropDownValues";

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
    <OplDrawer>
      <Practices {...props} {...dataProps}>
        <SearchContainer practices={edges} />
      </Practices>
    </OplDrawer>
  );
};

export default PracticesWithData;

export const pageQuery = graphql`
  query IndexPageTemplate {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "practice-page" } } }
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
            mobiusTags
            icon
            mediaGallery {
              link
            }
          }
        }
      }
    }
  }
`;
