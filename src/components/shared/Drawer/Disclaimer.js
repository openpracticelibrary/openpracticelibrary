import React from "react";
import { CCHeartIcon } from "../../../assets/icons/index";
import { Typography, Box } from "@material-ui/core";

const Disclaimer = () => (
  <Box style={{ whiteSpace: "normal " }} display="flex" alignItems="center">
    <CCHeartIcon />
    <Typography variant="caption">
      Except where otherwise noted, content on this site is licensed under a
      Creative Commons Attribution 4.0 International license.
    </Typography>
  </Box>
);
export default Disclaimer;
