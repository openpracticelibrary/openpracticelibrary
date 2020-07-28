import React from "react";
import { withTheme } from "@material-ui/core/styles/index";

import Collection from "../../shared/Collection";
import OplTypography from "../../shared/components/OplTypography";

const PageIntroCollection = (props) => (
  <Collection
    fill={props.theme.palette.grey.A400}
    spacing={2}
    practiceId={props.practiceId}
    upvotes={props.upvotes}
    imgCount={props.imgCount}
    questions={props.questions}
    alignment={2}
  >
    <OplTypography
      variant="overline"
      pr={2}
    >
        Collection
    </OplTypography>
  </Collection>
);

export default withTheme(PageIntroCollection);
