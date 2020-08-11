import React from "react";
import { graphql } from "gatsby";
import { makeStyles } from "@material-ui/core/styles/index";
import ReactMarkdown from "react-markdown";
import { Box, Typography } from "@material-ui/core";
import HeroColor from "../components/shared/HeroColor";
import HistoryValues from "../components/About/HistoryValues";
import ProductTeam from "../components/About/ProductTeam";
import Feedback from "../components/About/Feedback";
import Contributors from "../components/About/Contributors";
import OplDrawer from "../components/shared/Drawer";

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
    <OplDrawer>
      <Box data-testid="additionalPage" display="flex" flexDirection="column">
        <HeroColor type="gradient" gradient={1}>
          <Box px={6}>
            <Typography component="h1" variant="h3">
              {props.data.markdownRemark.frontmatter.title}
            </Typography>
          </Box>
        </HeroColor>
        <Box maxWidth="70rem" alignSelf="center" mx={6}>
          <PageBodyData {...props} />
        </Box>
        <Feedback />
      </Box>
    </OplDrawer>
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