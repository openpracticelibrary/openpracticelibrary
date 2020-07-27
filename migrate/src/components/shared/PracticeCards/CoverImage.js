import React from "react";
import { navigate } from "@reach/router";
import { Paper } from '@material-ui/core';

import OplImage from "../components/OplImage";

const CoverImage = (props) => (
  <Paper
    elevation={0}
    onClick={() => navigate(`/practice/${props.slug}`)}
  >
    <OplImage
      data-testid="coverimage"
      alt={props.practiceTitle}
      src={props.coverImage}
      height={181}
      width={295}
      borderRadius={10}
    />
  </Paper>
);

export default CoverImage;
