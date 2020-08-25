import React from "react";
import { Box, Divider, Typography } from "@material-ui/core";
const MobiusDescription = () => (
  <Box>
    <Box marginBottom={2}>
      <Typography align="center" variant="h5" gutterBottom>
        The Mobius Loop
      </Typography>
      <Divider />
    </Box>
    <Typography gutterBottom>
      An iterative process model for rapidly developing digital products.
    </Typography>
    <Typography>
      The Open Practice Library is organized around this model. Filtering below
      will show you practices that fall on the relevant part of the loop.
    </Typography>
  </Box>
);
export default MobiusDescription;
