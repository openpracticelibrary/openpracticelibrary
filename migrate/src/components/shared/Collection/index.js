import React from "react";
import { AmaIcon, CameraIcon, FilledHeartIcon } from "../../../assets/icons";
import { Box } from '@material-ui/core';
import OplTypography from "../components/OplTypography";

const Collection = (props) => {
  const handleLike = () => {
    const originalLikes = props.upvotes;
    const newUpvotes = originalLikes + 1;
    console.log('liked me :)');
  };

  return (
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
        data-testid="heartIcon"
        onClick={handleLike}
      >
        <FilledHeartIcon fill={props.fill} /> {props.upvotes}{" "}
      </OplTypography>
      <OplTypography
        fontWeight="bold"
        variant="subtitle1"
        data-testid="cameraIcon"
        px={props.spacing}
      >
        <CameraIcon fill={props.fill} /> {props.imgCount}{" "}
      </OplTypography>
      <OplTypography
        fontWeight="bold"
        variant="subtitle1"
        data-testid="questionIcon"
      >
        <AmaIcon fill={props.fill} /> {props.questions}{" "}
      </OplTypography>
    </Box>
  );
}

export default Collection;
