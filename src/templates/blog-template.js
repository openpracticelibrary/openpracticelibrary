import React from "react";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import { Container, Box, Grid, Typography } from "@material-ui/core";

import OplDrawer from "../components/shared/Drawer";
import Feedback from "../components/About/Feedback";
import HeroColor from "../components/shared/HeroColor";
import ContributedBy from "../components/practicePage/PageIntro/ContributedBy";

const BlogPostTemplate = (props) => {
  const { data: { markdownRemark: { rawMarkdownBody, frontmatter: { title, subtitle, authors, date } } } } = props;

  return (
    <OplDrawer>
      <Box display="flex" flexDirection="column">
        <HeroColor type="gradient" gradient={1} height="40vh">
          <Container maxWidth="md">
            <Box px={6}>
              <Typography variant="h2">
                {title}
              </Typography>
              <Typography variant="h5">
                {subtitle}
              </Typography>
              <ContributedBy authors={authors} createdAt={date} />
            </Box>
          </Container>
        </HeroColor>
        <Box margin={6}>
          <Container maxWidth="md">
            <ReactMarkdown
              source={rawMarkdownBody}
            />
          </Container>
        </Box>
        <Feedback />
      </Box>
    </OplDrawer>
  )
};

export default BlogPostTemplate;

export const blogQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      rawMarkdownBody
      frontmatter {
        title
        subtitle
        date(formatString: "MMMM DD, YYYY")
        authors {
          title
          github
        }
      }
    }
  }
`;

