import React from "react";
import { Box, Typography } from "@material-ui/core";

const ProductTeam = () => (
  <Box data-testid="pageGrid" width="100%" my={8}>
    <Typography gutterBottom variant="h4" component="h3" color="primary">
      Our product team
    </Typography>
    <Typography gutterBottom>
      The 2020 pandemic led to forming a small Global remote product team for
      improving the library and delivering upon the growth strategy. This
      cross-functional group included product management, product design, and
      engineering to bring a balanced approach for continuous discovery and
      continuous delivery.
    </Typography>
    <Typography gutterBottom>
      There was a focus on bringing the team together culturally and using
      various activities for getting to know one another. To align with a
      process that meets the most user needs the team based discovery practices
      on human-centered design methodologies with regular user feedback cycles
      for informing design and product decision making.
    </Typography>
    <Typography gutterBottom>
      The development approach included pulling from [open source technology,
      middleware, test-driven, Agile, devops.
    </Typography>
  </Box>
);

export default ProductTeam;
