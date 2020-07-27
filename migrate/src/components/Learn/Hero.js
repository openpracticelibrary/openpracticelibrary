import React from "react";
import { ArrowDownward } from "@material-ui/icons";
import HeroImage from "../../assets/images/hero.jpg";
import { Box, Button, Typography } from "@material-ui/core";

const Hero = ({ navigate, scrollTo }) => {
  const scrollDown = () => {
    scrollTo.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <>
      <Box position="absolute" top="2rem" left="2rem" color="common.white">
        <Typography variant="h6" color="inherit">
          Open Practice Library
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        flexWrap="wrap"
        style={{
          backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.6)
          ), url(${HeroImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "none",
          backgroundPosition: "center"
        }}
      >
        <Box mx={8} color="common.white" textAlign="center" width="100%">
          <Typography color="inherit" variant="h2" gutterBottom>
            Deliver real business value quickly and move past the buzzwords.
          </Typography>
        </Box>

        <Box mx="auto" position="absolute" bottom="2rem">
          <Button
            size="large"
            variant="contained"
            color="primary"
            endIcon={<ArrowDownward />}
            onClick={scrollDown}
          >
            Learn
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
