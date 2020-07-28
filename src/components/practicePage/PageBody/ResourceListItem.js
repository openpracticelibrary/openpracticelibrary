import React from "react";
import { makeStyles } from "@material-ui/core/styles/index";

import { Typography, Link, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(1),
    margin: theme.spacing(1),
  },
  space: {
    paddingRight: theme.spacing(2),
  },
  color: {
    color: theme.palette.grey["900"],
  },
}));

export default function ResourceListItem(props) {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.space}>{props.children}</Box>
        <Box>
          <Link href={props.url}>
            <Typography
              variant="body1"
              key={props.listItemKey}
              className={classes.color}
            >
              {props.description}
            </Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
}
