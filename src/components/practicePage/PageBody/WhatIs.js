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
  <img {...props} style={{ maxWidth: "100%" }} alt="What is this practice?" />
);

export default function WhatIs(props) {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.space}>
          <Typography variant={"h4"} ref={props.whatIsRef}>
            <b>What is {props.title}?</b>
          </Typography>
        </Box>
        <Box className={classes.space}>
          {props.editing ? (
            props.children
          ) : (
            <Typography component={"span"}>
              <ReactMarkdown
                source={props.source}
                renderers={{ image: Image }}
              />
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
}
