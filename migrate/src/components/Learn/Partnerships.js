import React from "react";
import Partners from "./Partners";
import RedHatLogo from "../../assets/images/logo-red-hat-hat-color-rgb.png";
import NounProjectLogo from "../../assets/images/noun-project.png";
import MobiusLogo from "../../assets/images/mobius-small.png";
import CCHeartLogo from "../../assets/images/ccheart-black.png";
import { Box, Typography } from "@material-ui/core";

const collaborators = [
  {
    name: "Red Hat",
    logo: RedHatLogo,
    text: "Home of our product team and our largest Open Source Contributor."
  },
  {
    name: "Mobius Loop",
    logo: MobiusLogo,
    text:
      "Our process model and partner in defining product lifecycle practices."
  },
  {
    name: "Creative Commons",
    logo: CCHeartLogo,
    text:
      "Under this license, our content is as open source as our application software."
  },
  {
    name: "The Noun Project",
    logo: NounProjectLogo,
    text:
      "The community driven icon library we love so much and use for UI design."
  }
];

const Partnerships = props => (
  <Box marginTop={4} data-testid="communityHeader">
    <Typography color="primary" variant="h4" gutterBottom>
      Partnerships
    </Typography>
    <Typography variant="body1">
      No great open source project is without great collaboration.
    </Typography>
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mx={4}
    >
      {collaborators.map(({ logo, name, text }) => (
        <Partners key={name} logo={logo} name={name} text={text} />
      ))}
    </Box>
  </Box>
);

export default Partnerships;
