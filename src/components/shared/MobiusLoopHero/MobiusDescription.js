import React from "react";
import { Box, Divider, Typography } from "@mui/material";
const MobiusDescription = () => (
  <Box>
    <Box marginBottom={2}>
      <Typography align="center" variant="h5" component="h3" gutterBottom>
        The Mobius Loop
      </Typography>
      <Divider />
    </Box>
    <Typography gutterBottom variant="body2">
      An iterative process model for rapidly developing digital products.
    </Typography>
    <Typography gutterBottom variant="body2">
      The Open Practice Library is organized around this model.
    </Typography>
    <Typography variant="body2">
      The buttons below will show you practices that fall on the relevant part
      of the loop.
    </Typography>
  </Box>
);
export default MobiusDescription;
