import React from "react";
import { navigate } from "@reach/router";

import OplTypography from "../components/OplTypography";
import { Tags } from "./Tags";

const PracticeCardTitle = (props) => (
  <div onClick={() => navigate(`/practice/${props.slug}`)}>
    <OplTypography
      id="cardTitle"
      mb={-3}
      data-testid="practicetitle"
    >
      {props.practiceTitle}
    </OplTypography>
    <Tags tags={props.tags} isHovered={props.isHovered} />
  </div>
);

export default PracticeCardTitle;
