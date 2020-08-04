import React from "react";
import { CameraAlt } from "@material-ui/icons";
import { Box } from "@material-ui/core";

const Collection = (props) => (
  <Box display="flex" alignItems="center" py={props.alignment}>
    {props.children}
    <Box
      fontWeight="bold"
      display="flex"
      alignItems="center"
      data-testid="cameraIcon"
      px={props.spacing}
    >
      <CameraAlt /> {props.imgCount}
    </Box>
  </Box>
);

export default Collection;
