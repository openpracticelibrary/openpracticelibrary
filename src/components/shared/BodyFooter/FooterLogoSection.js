import React from "react";
import { Box, Typography } from "@material-ui/core";
import Logo from "../../../components/shared/Logo";
import logoLabs from "../../../assets/images/logo-red-hat-open-innovation-labs-a-standard-rgb.png";

export default function FooterLogoSection() {
  return (
    <>
      <Logo horizontal />
      <Box display="flex" alignItems="center">
        <Box mr={1}>
          <Typography variant="overline" data-testid="poweredBy">
            powered by
          </Typography>
        </Box>
        <img src={logoLabs} alt="Open Innovation Labs Logo" />
      </Box>
    </>
  );
}
