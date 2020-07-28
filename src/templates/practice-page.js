import React from "react";
import { graphql } from "gatsby";

import OplDrawer from "../components/shared/Drawer";
import PracticePage from "../components/practicePage";

const PracticePageWithData = (props) => {

  return (
    <OplDrawer>
    <PracticePage
      data={props.data}
      {...props}
    />
        </OplDrawer>
  );
};

export default PracticePageWithData;

export const pageQuery = graphql`
  query PracticePageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      rawMarkdownBody
      frontmatter {
        title
        subtitle
        date(formatString: "MMMM DD, YYYY")
        authors
        area
        tags
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

