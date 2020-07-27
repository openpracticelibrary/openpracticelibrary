import React from "react";
import { Box, Typography } from "@material-ui/core";
import logoLabs from "../../../assets/images/logo-red-hat-open-innovation-labs-a-standard-rgb.png";

export default function FooterLogoSection() {
  return (
    <>
      <Typography variant="h6">Open Practice Library</Typography>
      <Box display="flex" alignItems="center">
        <Typography variant="overline" data-testid="poweredBy">
          powered by
        </Typography>
        <img src={logoLabs} alt="Open Innovation Labs Logo" />
      </Box>
    </>
  );
}
