import React from "react";
import clsx from "clsx";
import { IconButton } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import { spacing, palette } from "@material-ui/system";
import styled from "styled-components";

const StyledIconButton = styled(IconButton)`${spacing}${palette}`;

const styles = theme => ({
  root: {
    color: ({ iconColor }) => iconColor,
    "&:hover": {
      backgroundColor: ({ hoverColor }) => hoverColor,
    },
  },
});

const OplIconButton = ({ classes, hoverColor, iconColor, className, ...other }) => (
  <StyledIconButton className={clsx(classes.root, className)} {...other}/>
);

export default withStyles(styles)(OplIconButton);
