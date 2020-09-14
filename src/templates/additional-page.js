import React from "react";
import { graphql } from "gatsby";
import { makeStyles } from "@material-ui/core/styles/index";
import ReactMarkdown from "react-markdown";
import { Box, Container, Typography } from "@material-ui/core";
import HeroColor from "../components/shared/HeroColor";
import Layout from "../components/Layout";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  space: {
    padding: theme.spacing(1),
  },
}));

const Image = (props) => (
  <img {...props} style={{ maxWidth: "100%" }} alt="What is this practice?" />
);

const AdditionalPage = (props) => {
  return (
    <Layout ogContent={{
      title: "Open Practice Library",
      desc: "Practices that empower teams to collaborate and deliver iteratively",
      image: "https://openpracticelibrary.github.io/opl-media/images/opl-logo.png",
    }}>
      <Box data-testid="additionalPage" display="flex" flexDirection="column">
        <HeroColor type="gradient" gradient={1}>
          <Container maxWidth="md">
            <Box px={6}>
              <Typography component="h1" variant="h3">
                {props.data.markdownRemark.frontmatter.title}
              </Typography>
            </Box>
          </Container>
        </HeroColor>
          <Box alignSelf="center" my={4}>
            <Container maxWidth="md">
              <PageBodyData {...props} />
            </Container>
        </Box>
      </Box>
    </Layout>
  );
};

const PageBodyData = (props) => {
  const classes = useStyles();
  const post = props.data.markdownRemark;
  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.space}>
          <Typography component={"span"}>
            <ReactMarkdown
              source={post.rawMarkdownBody}
              renderers={{ image: Image }}
            />
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default AdditionalPage;

export const additionalPageQuery = graphql`
  query AdditionalPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      rawMarkdownBody
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
