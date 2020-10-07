import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Practices from "../components/allPractices";
import SearchContainer from "../components/shared/Search/SearchContainer";
import { mobiusLoopArray } from "../utilities/dropDownValues";
import {Container, Typography} from "@material-ui/core";

const PracticesWithDataElements = (props) => {
  //make first letter of tag upper case (example: discovery => Discovery)
  const element =
    props.pageContext.element.charAt(0).toUpperCase() +
    props.pageContext.element.slice(1);
  console.log(element);
  const tag = "All";

  const dataProps = {
    mobiusLoopArray,
    selectedMobiusLoopFilter: tag,
  };

  const {
    data: {
      allMarkdownRemark: { edges },
    },
  } = props;

  console.log(edges);

  return (
    <Layout
      ogContent={{
        title: tag,
        desc: `Practices under the ${tag} section of the mobius loop in the Open Practice Library`,
        image:
          "https://openpracticelibrary.github.io/opl-media/images/opl-logo.png",
      }}
    >
      <Container maxWidth="md">
      <Typography gutterBottom variant="h2" align="center">
        {element}
      </Typography>
        <SearchContainer practices={edges} />
      </Container>
    </Layout>
  );
};

export default PracticesWithDataElements;

export const elementPageQuery = graphql`
  query ElementPageTemplate($element: String) {
    allMarkdownRemark(
      filter: { frontmatter: { primaryElement: { eq: $element } } }
      sort: { fields: fields___slug }
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
            primaryElement
            icon {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
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
