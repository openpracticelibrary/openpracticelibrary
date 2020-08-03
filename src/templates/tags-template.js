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

// function reducer(state, action) {
//   switch (action.type) {
//     case "popularFilterChange":
//       state.selectedPopularFilter = action.content;
//       return state;
//     case "tagFilterChange":
//       state.selectedFilterTag = action.content;
//       state.tagArray = formTagArray(
//         state.selectedFilterTag,
//         state.selectedMobiusLoopFilter
//       );
//       return state;
//     case "mobiusFilterChange":
//       state.selectedMobiusLoopFilter = action.content;
//       state.tagArray = formTagArray(
//         state.selectedFilterTag,
//         state.selectedMobiusLoopFilter
//       );
//       return state;
//     case "keywordSearchChange":
//       state.keywords = action.content;
//       return state;
//     default:
//       throw new Error();
//   }
// }

const PracticesWithDataTags = (props) => {
  // const [keywordSearchToggle, setKeywordSearchToggle] = React.useState(false);
  // const [state, dispatch] = React.useReducer(reducer, {}, () => {
  //   return {
  //     tagArray: [],
  //     selectedFilterTag: filterTags[0],
  //     selectedMobiusLoopFilter: mobiusLoopArray[0],
  //     selectedPopularFilter: Object.keys(popularMenuItems)[0],
  //     keywords: [],
  //   };
  // });

  //make first letter of tag upper case (example: discovery => Discovery)
  const tag = props.pageContext.tag.charAt(0).toUpperCase() + props.pageContext.tag.slice(1);

  // const toggleKeywordSearch = () =>
  //   setKeywordSearchToggle(!keywordSearchToggle);

  const dataProps = {
    // selectedPopularFilter: state.selectedPopularFilter,
    // popularMenuItems,
    // filterTags,
    // selectedFilterTag: state.selectedFilterTag,
    // keywordSearchToggle,
    mobiusLoopArray,
    selectedMobiusLoopFilter: tag,
    // toggleKeywordSearch,
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
