import React from "react";
import { styled } from "@mui/material/styles";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import { Box, Button, Container, Typography } from "@mui/material";
import HeroColor from "../components/shared/HeroColor";
import Layout from "../components/Layout";
import { ArrowForward } from "@mui/icons-material";

const Root = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

const Space = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
}));

const Image = (props) => (
  <img {...props} style={{ maxWidth: "100%" }} alt="What is this practice?" />
);

const CallToAction = (frontmatter) => {
  if (frontmatter.title === "Contribution Guide") {
    return (
      <Button
        size="large"
        variant="contained"
        color="secondary"
        endIcon={<ArrowForward />}
        onClick={() =>
          (window.location.href = `${window.location.origin}/admin/`)
        }
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
        desc: "Practices that empower teams to collaborate and deliver iteratively",
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
  const post = props.data.markdownRemark;
  return (
    <Root>
      <Space>
        <Typography component={"span"}>
          <ReactMarkdown components={{ img: Image }}>
            {post.rawMarkdownBody}
          </ReactMarkdown>
        </Typography>
      </Space>
    </Root>
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
