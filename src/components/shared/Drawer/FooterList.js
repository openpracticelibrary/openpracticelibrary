import React from "react";
import { Typography, Link, Box } from '@material-ui/core';

export default function FooterList(props) {
  return (
    <>
      <Box display="flex" p={1}>
        <Box>
          {props.children}
        </Box>
        <Box ml={1}>
          <Link href={props.link} target="_blank">
            <Typography variant="body2"> {props.text} </Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
}
