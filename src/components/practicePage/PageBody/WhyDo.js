import React from "react";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles/index";
import ReactMarkdown from "react-markdown";

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
  <img {...props} style={{ maxWidth: "100%" }} alt="Why do this practice" />
);

export default function WhyDo(props) {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.space}>
          <Typography variant={"h4"} ref={props.whyDoRef}>
            <b>Why do {props.title}?</b>
          </Typography>
        </Box>
        <Box className={classes.space}>
          <Typography component={"span"}>
            <ReactMarkdown source={props.source} renderers={{ image: Image }} />
          </Typography>
        </Box>
      </Box>
    </>
  );
}
