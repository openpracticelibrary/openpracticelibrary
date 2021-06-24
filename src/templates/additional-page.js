import React from "react";
import { graphql } from "gatsby";
import { makeStyles } from "@material-ui/core/styles/index";
import ReactMarkdown from "react-markdown";
import { Box, Button, Container, Typography } from "@material-ui/core";
import HeroColor from "../components/shared/HeroColor";
import Layout from "../components/Layout";
import { ArrowForward } from "@material-ui/icons";

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

const CallToAction = (frontmatter) => {
  if (frontmatter.title == "Contribution Guide") {
    return (
      <Button
        size="large"
        variant="contained"
        color="secondary"
        endIcon={<ArrowForward />}
        onClick={() => (window.location.href = `${window.location.origin}/admin/`)}
      >
      Start Now
      </Button>
    );
  } else {
    return null;
  }
};

const AdditionalPage = (props) => {
  return (
    <Layout
      ogContent={{
        title: "Open Practice Library",
        desc:
          "Practices that empower teams to collaborate and deliver iteratively",
        image:
          "https://openpracticelibrary.github.io/opl-media/images/opl-logo.png",
      }}
    >
      <Box data-testid="additionalPage" display="flex" flexDirection="column">
        <HeroColor type="gradient" gradient={1}>
          <Container maxWidth="md">
            <Typography component="h1" variant="h3">
              {props.data.markdownRemark.frontmatter.title}
            </Typography>
          </Container>
        </HeroColor>
        <Box alignSelf="center" my={4}>
          <Container maxWidth="md">
            <PageBodyData {...props} />
            <CallToAction {...props.data.markdownRemark.frontmatter} />
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
