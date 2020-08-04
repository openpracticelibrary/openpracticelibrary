import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  root: {
    borderRadius: 26.5,
    padding: theme.spacing(1.5, 4),
    borderColor: theme.palette.primary.main,
    borderWidth: "1px",
    borderStyle: "solid",
    backgroundColor: ({ bg }) => bg || "none",
    textTransform: "none"
  },
});

const OplButton = ({ classes, width, children, className, ...other }) => (
  <Button className={clsx(classes.root, className)} {...other}>
    {children}
  </Button>
);

OplButton.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(OplButton);

