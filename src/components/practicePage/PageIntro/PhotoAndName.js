import React from "react";
import { Person } from "@mui/icons-material";
import { Box, Avatar, Typography } from "@mui/material";

const PhotoAndName = ({ authorName, avatar }) => (
  <Box
    display="flex"
    flexDirection="row"
    justifyContent="flex-start"
    alignItems="center"
    pr={3}
    minWidth="fit-content"
  >
    <Avatar src={avatar} bgcolor="transparent">
      <Person />
    </Avatar>
    <Typography data-testid={"authorName"}>{authorName}</Typography>
  </Box>
);

export default PhotoAndName;
