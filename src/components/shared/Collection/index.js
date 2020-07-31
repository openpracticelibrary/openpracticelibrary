import React from "react";
<<<<<<< HEAD
import { CameraIcon } from "../../../assets/icons";
=======
import { CameraAlt } from "@material-ui/icons";
>>>>>>> 6f24872... fix(assets): iconography
import { Box } from "@material-ui/core";
import OplTypography from "../components/OplTypography";

const Collection = (props) => (
  <Box
    display="flex"
    flexDirection="row"
    alignItems="flex-start"
    py={props.alignment}
  >
    {props.children}
    <OplTypography
      fontWeight="bold"
      variant="subtitle1"
      data-testid="cameraIcon"
      px={props.spacing}
    >
      <CameraAlt /> {props.imgCount}{" "}
    </OplTypography>
  </Box>
);

export default Collection;
