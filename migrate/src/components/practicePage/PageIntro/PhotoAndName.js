import React from "react";
import { withTheme } from "@material-ui/core/styles/index";
import { UserIcon } from "../../../assets/icons";
import { Box } from '@material-ui/core';

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
      width={props.theme.spacing(3)}
      height={props.theme.spacing(3)}
      bgcolor="transparent"
    >
      <UserIcon />
    </OplAvatar>
    <OplTypography
      variant="body1"
      pl={1}
      data-testid={"authorName"}
    >
      {props.authorName}
    </OplTypography>
  </Box>
);

export default withTheme(PhotoAndName);
