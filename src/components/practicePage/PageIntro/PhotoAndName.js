import React from "react";
import { withTheme } from "@material-ui/core/styles/index";
import { Person } from "@material-ui/icons";
import { Box } from "@material-ui/core";

import OplTypography from "../../shared/components/OplTypography";
import OplAvatar from "../../shared/components/OplAvatar";

const PhotoAndName = (props) => (
  <Box
    display="flex"
    flexDirection="row"
    justifyContent="flex-start"
    alignItems="flex-start"
    pr={3}
    minWidth="fit-content"
  >
    <OplAvatar
      src={props.avatar}
      width={props.theme.spacing(4)}
      height={props.theme.spacing(4)}
      bgcolor="transparent"
    >
      <Person />
    </OplAvatar>
    <OplTypography variant="body1" pl={1} data-testid={"authorName"}>
      {props.authorName}
    </OplTypography>
  </Box>
);

export default withTheme(PhotoAndName);
