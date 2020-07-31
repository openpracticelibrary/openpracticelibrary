import React from "react";
import { CameraIcon } from "../../../assets/icons";
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
      <CameraIcon fill={props.fill} /> {props.imgCount}{" "}
    </OplTypography>
  </Box>
);

export default Collection;
