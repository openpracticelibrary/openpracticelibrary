import React from "react";
import { makeStyles } from "@material-ui/core/styles/index";
import { Link } from "gatsby";
import { Typography, Box } from "@material-ui/core";

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
  const linkValue = new URL(props.url);

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.space}>{props.children}</Box>
        <Box>
          {linkValue.hostname === "openpracticelibrary.com" ? (
            <Link to={linkValue.pathname}>
              <Typography
                variant="body1"
                key={props.listItemKey}
                className={classes.color}
              >
                {props.description}
              </Typography>
            </Link>
          ) : (
            <a href={props.url} target="_blank" rel="noopener noreferrer">
              <Typography
                variant="body1"
                key={props.listItemKey}
                className={classes.color}
              >
                {props.description}
              </Typography>
            </a>
          )}
        </Box>
      </Box>
    </>
  );
}
