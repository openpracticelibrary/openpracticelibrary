import React from "react";
import { graphql, Link } from "gatsby";
import { Container, Box, Typography, Divider } from "@mui/material";
import Layout from "../../components/Layout";
import HeroColor from "../../components/shared/HeroColor";

const BlogRoll = ({ slug, title, date, excerpt }) => (
  <>
    <Box mt={4} mb={4}>
      <Link
        to={slug}
        style={{
          textDecoration: "none",
        }}
      >
        <Typography variant="h4">{title}</Typography>
      </Link>
      <Typography variant="overline">Published {date}</Typography>
      <Typography variant="body1">{excerpt}</Typography>
    </Box>
    <Divider />
  </>
);

const BlogPage = (props) => {
  const {
    data: {
      allMarkdownRemark: { edges },
    },
  } = props;

  return (
    <Layout
      ogContent={{
        title: "Open Practice Library - Blog",
        desc: "Perspectives from the Open Practice Library",
        image:
          "https://openpracticelibrary.github.io/opl-media/images/opl-logo.png",
      }}
    >
      <Box display="flex" flexDirection="column">
        <HeroColor type="gradient" gradient={1} height="30vh">
          <Container maxWidth="md">
            <Box px={6}>
              <Typography variant="h2">Blog</Typography>
              <Typography variant="h5">
                Perspectives from the Open Practice Library
              </Typography>
            </Box>
          </Container>
        </HeroColor>
        <Box margin={6}>
          <Container maxWidth="md">
            {edges.map((post) => (
              <BlogRoll
                slug={post.node.fields.slug}
                title={post.node.frontmatter.title}
                date={post.node.frontmatter.date}
                excerpt={post.node.excerpt}
              />
            ))}
          </Container>
        </Box>
      </Box>
    </Layout>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query BlogPageTemplate {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-page" } } }
      sort: { frontmatter: { date: DESC } }
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
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt
        }
      }
    }
  }
`;
