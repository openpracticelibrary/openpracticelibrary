import React from "react";
import { navigate } from "@reach/router";
import OplTypography from "../components/OplTypography";

const Subtitle = (props) => (
  <OplTypography
    data-testid="subtitle"
   
    width={280}
    fontSize="0.75rem"
    my={1}
    onClick={() => navigate(`/practice/${props.slug}`)}
  >
    {props.subtitle}
  </OplTypography>
);

export default Subtitle;
