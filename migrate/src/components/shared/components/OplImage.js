import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

import styled from 'styled-components';

import { borders, sizing, spacing } from '@material-ui/system';

const Image = styled.img`${borders}${sizing}${spacing}`;

const styles = theme => ({
  root: {
    objectFit: ({objectFit}) => objectFit,
  },
});

const OplImage = React.forwardRef(({ classes, objectFit, className, ...other }, ref) =>
  <Image className={clsx(classes.root, className)} {...other} ref={ref} />
);

export default withStyles(styles)(OplImage);
