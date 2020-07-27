import React from "react";
import { graphql, Link } from "gatsby";

import LoginContext from "../components/shared/Login/LoginContext";
import PracticePage from "../components/practicePage";

const PracticePageWithData = (props) => {

  return (
    <PracticePage
      data={data}
      {...props}
    />
  );
};

export default PracticePageWithData;

export const pageQuery = graphql`
  query PracticePageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        subtitle
        date(formatString: "MMMM DD, YYYY")
        authors
        area
      }
    }
  }
`;

