import React from "react";
import RedHatLogo from "../../assets/images/logo-red-hat-hat-color-rgb.png";
import MobiusLogo from "../../assets/images/mobius-small.png";
import CCHeartLogo from "../../assets/images/ccheart-black.png";
import { Box, Typography } from "@mui/material";
import PartnerLink from "./PartnerLink";

const Partnerships = () => (
  <Box data-testid="communityHeader">
    <Typography color="primary" variant="h4" gutterBottom>
      Partnerships
    </Typography>
    <Typography>
      No great open source project is without great collaboration.
    </Typography>
    <Box
      my={4}
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      alignItems="center"
      justifyContent="space-between"
    >
      <PartnerLink
        altText="Red Hat Logo"
        caption="Home of our product team and our largest Open Source Contributor."
        imageSrc={RedHatLogo}
        title="Red Hat"
        url="https://www.redhat.com/en/services/consulting/open-innovation-labs"
      />
      <PartnerLink
        altText="Mobius Loop Logo"
        caption="Our process model and partner in defining product lifecycle practices."
        imageSrc={MobiusLogo}
        title="Mobius Loop"
        url="https://mobiusloop.com"
      />
      <PartnerLink
        altText="Creative Commons Logo"
        caption="Our content is as open source as our application software."
        imageSrc={CCHeartLogo}
        title="Creative Commons"
        url="https://creativecommons.org"
      />
    </Box>
  </Box>
);

export default Partnerships;
