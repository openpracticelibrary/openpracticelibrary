import React from 'react';
import { Tooltip } from "@material-ui/core";
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  tooltip: {
    textAlign: "center",
    fontSize: "0.75rem",
    minHeight: ({ minH }) => minH || "30px",
    minWidth: ({ minW }) => minW || "110px",
    boxSizing: "border-box",
    backgroundColor: "white",
    color: theme.palette.grey[800],
    borderRadius: 7,
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: "2px 0 4px 0 rgba(0,0,0,0.1)",
    transform: "scaleY(-1)",
  },
});

const OplTooltip = ({ classes, children, className, ...other }) => (
  <Tooltip
    classes={{
      tooltip: classes.tooltip
    }}
    {...other}
  >
    {children}
  </Tooltip>
);

export default withStyles(styles)(OplTooltip);

