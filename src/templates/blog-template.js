import React from "react";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import { Container, Box, Typography } from "@mui/material";

import Layout from "../components/Layout";
import HeroColor from "../components/shared/HeroColor";
import HeroImage from "../components/shared/HeroImage";
import ContributedBy from "../components/practicePage/PageIntro/ContributedBy";

const Hero = ({ jumbotron, children }) => {
  if (jumbotron) {
    return (
      <HeroImage imageUrl={jumbotron} height="40vh">
        <Box
          display="flex"
          alignItems="center"
          bgcolor="rgba(0,0,0,0.4)"
          borderRadius="17px"
          color="white"
          width="fit-content"
        >
          {children}
        </Box>
      </HeroImage>
    );
  }

  return (
    <HeroColor type="gradient" gradient={1} height="40vh">
      {children}
    </HeroColor>
  );
};

const BlogPostTemplate = (props) => {
  const {
    data: {
      markdownRemark: {
        rawMarkdownBody,
        excerpt,
        frontmatter: { title, subtitle, authors, date, jumbotron },
      },
    },
  } = props;

  const image = jumbotron?.childImageSharp.fluid;

  return (
    <Layout
      ogContent={{
        title,
        desc: excerpt,
        image: image
          ? image.src
          : "https://openpracticelibrary.github.io/opl-media/images/opl-logo.png",
      }}
    >
      <Box display="flex" flexDirection="column">
        <Hero jumbotron={image}>
          <Container maxWidth="md">
            <Box px={6}>
              <Typography variant="h2">{title}</Typography>
              <Typography variant="h5">{subtitle}</Typography>
              <ContributedBy authors={authors} createdAt={date} />
            </Box>
          </Container>
        </Hero>
        <Box margin={6}>
          <Container maxWidth="md">
            <ReactMarkdown>{rawMarkdownBody}</ReactMarkdown>
          </Container>
        </Box>
      </Box>
    </Layout>
  );
};

export default BlogPostTemplate;

export const blogQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      rawMarkdownBody
      excerpt
      frontmatter {
        title
        subtitle
        date(formatString: "MMMM DD, YYYY")
        jumbotron {
          childImageSharp {
            fluid(maxWidth: 490, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        authors {
          title
          github
        }
      }
    }
  }
`;
