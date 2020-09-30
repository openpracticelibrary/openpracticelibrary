import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  options: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.error.dark,
    },
    "&:active": {
      backgroundColor: theme.palette.error.light,
    },
  },
  delivery: {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.warning.dark,
    },
    "&:active": {
      backgroundColor: theme.palette.warning.light,
    },
  },
}));

const FilterButton = ({ children, ...props }) => {
  const classes = useStyles();
  if (props.color === "options") {
    return (
      <Button classes={{ root: classes.options }} {...props}>
        {children}
      </Button>
    );
  }
  if (props.color === "delivery") {
    return (
      <Button classes={{ root: classes.delivery }} {...props}>
        {children}
      </Button>
    );
  }
  return <Button {...props}> {children}</Button>;
};

export default FilterButton;
