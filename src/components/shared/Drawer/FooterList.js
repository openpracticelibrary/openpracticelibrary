import React from "react";
import { Typography, Box } from "@material-ui/core";
import { Link } from "gatsby";

export default function FooterList(props) {
  return (
    <>
      <Box display="flex" p={1}>
        <Box>{props.children}</Box>
        <Box ml={1}>
          <Link href={props.link} target="_blank" rel="noopener">
            <Typography variant="body2"> {props.text} </Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
}
