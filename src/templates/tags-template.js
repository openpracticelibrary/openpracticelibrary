import React from "react";
import { graphql } from "gatsby";
import OplDrawer from "../components/shared/Drawer";
import PracticeCardGrid from "../components/shared/PracticeCards/PracticeCardGrid";
import Practices from "../components/allPractices";
import {
  filterTags,
  mobiusLoopArray,
  popularMenuItems,
  formTagArray,
} from "../utilities/dropDownValues";

const paginationLimit = 20;

const PracticesWithDataTags = (props) => {

  //make first letter of tag upper case (example: discovery => Discovery)
  const tag = props.pageContext.tag.charAt(0).toUpperCase() + props.pageContext.tag.slice(1);

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
    <OplDrawer>
      <Practices {...props} {...dataProps}>
        <PracticeCardGrid practices={edges} />
      </Practices>
    </OplDrawer>
  );
};

export default PracticesWithDataTags;

export const tagPageQuery = graphql`
  query TagPageTemplate($tag: String) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
