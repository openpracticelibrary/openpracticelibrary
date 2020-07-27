import React from "react";
import { Box, Typography } from "@material-ui/core";
import { Link } from '@reach/router'

export default function NotFound(props) {
  return (
    <Box data-testid="aboutPageGrid" display="flex" flexDirection="column">
      <Box
        display="flex"
        alignItems="center"
        bgcolor="grey.100"
        height="15vh"
        width={1}
      >
        <Box px={6}>
          <Typography
            component="h1"
            variant="h3"
            color="inherit"
            data-testid="link"
          >
            404 Not Found - <Link to="/learn">Learn about OPL!</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
