import React from "react";
import { Typography, Box } from '@material-ui/core';

import OplTypography from "../../shared/components/OplTypography";
import { TagBox } from "../../shared/PracticeCards/Tags";

const TitleAndSubtitle = (props) => (
  <Box display="flex" flexDirection="column">
    <OplTypography
      py={1}
      variant={"h3"}
      data-testid={"title"}
    >
      {props.editing ?
        props.titleEdit : props.title
      }
    </OplTypography>
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="flex-start"
    >
      {props.tags && props.tags.map((t, i) => (
        <TagBox key={i}>
          <Typography variant={"overline"}>
              #{t.tag}&nbsp;&nbsp;
          </Typography>
        </TagBox>
      ))}
    </Box>
    <OplTypography
      pt={2}
      variant={"subtitle1"}
      data-testid={"subtitle"}
    >
      {props.editing ?
        props.subtitleEdit :
        props.subtitle
      }
    </OplTypography>
  </Box>
);

export default TitleAndSubtitle;
