import React from "react";
import { CCHeartIcon } from "../../../assets/icons/index";
import disclaimerIcon from "../../../assets/images/noun-project@3x.png";
import { makeStyles } from "@material-ui/core/styles/index";

import { Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  footerField: {
    overflowX: "auto",
    whiteSpace: "normal",
    lineHeight: "0.5rem",
    flexWrap: "nowrap",
  },
  footerTextPadding: {
    minWidth: "10.5rem",
  },
}));

export default function Disclaimer() {
  const classes = useStyles();

  return (
    <>
      <Grid
        className={classes.footerField}
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-end"
        spacing={1}
      >
        <Grid item>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item>
              <CCHeartIcon />
            </Grid>
            <Grid item>
              <img
                src={disclaimerIcon}
                alt="Disclaimer"
                height="8px"
                width="26px"
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={10} className={classes.footerTextPadding}>
          <Typography variant="caption">
            {
              "Except where otherwise noted, content on this site is licensed under a Creative Commons Attribution 4.0 International license. Icons by The Noun Project."
            }
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
