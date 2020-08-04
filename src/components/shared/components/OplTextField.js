import React from "react";
import clsx from "clsx";
import { TextField } from '@material-ui/core';
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    width: ({ width }) => width,
    minWidth: ({ minWidth }) => minWidth,
  },
  input: ({ typography }) => typography,
  inputRoot: {
    borderRadius: ({ rounded }) => rounded,
    backgroundColor: ({ bg }) => bg,
    boxShadow: ({ shadow }) => shadow,
  },
};

const OplTextField = ({
  classes,
  width,
  minWidth,
  rounded,
  bg,
  shadow,
  typography,
  InputProps,
  children,
  className,
  ...other
}) => (
  <TextField
    className={clsx(classes.root, className)}
    InputProps={{
      ...InputProps,
      classes: {
        input: clsx(classes.input, className),
        root: clsx(classes.inputRoot, className)
      }
    }}
    {...other}
  >
    {children}
  </TextField>
);

export default withStyles(styles)(OplTextField);
