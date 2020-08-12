import React from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";

const styles = {
  root: {
    background: ({ bg }) => bg,
  },
};

const OplBox = ({ classes, bg, children, className, ...other }) => (
  <Box className={clsx(classes.root, className)} {...other}>
    {children}
  </Box>
);

export default withStyles(styles)(OplBox);
