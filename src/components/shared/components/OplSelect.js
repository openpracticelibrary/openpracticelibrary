import React from "react";
import clsx from "clsx";
import { Select } from '@material-ui/core';
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    width: ({ width }) => width,
    minWidth: ({ minWidth }) => minWidth,
    borderRadius: ({ rounded }) => rounded,
  },
};

const OplSelect = ({
  classes,
  width,
  minWidth,
  rounded,
  children,
  className,
  ...other
}) => (
  <Select className={clsx(classes.root, className)} {...other}>
    {children}
  </Select>
);

export default withStyles(styles)(OplSelect);
