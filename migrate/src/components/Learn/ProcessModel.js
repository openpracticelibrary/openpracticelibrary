import React from "react";
import { navigate } from "@reach/router";
import { Box, Button, Link, Typography } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import MobiusLoopHero from "../shared/MobiusLoopHero";

const ProcessModel = () => {
  return (
    <Box data-testid="pageGrid" my={4}>
      <Typography
        gutterBottom
        variant="h4"
        color="primary"
        data-testid="processModel"
      >
        Our process model
      </Typography>

      <Box my={2}>
        <Typography gutterBottom>
          All of the practices in this library can be mapped to the{" "}
          <Link href="https://mobiusloop.com/" target="_blank" rel="noopener">
            Mobius Loop
          </Link>{" "}
          - a navigator created by an open source community that generates a
          continuous flow of innovation from discovery, to design, to delivery.
        </Typography>
        <Typography gutterBottom>
          Practices can be mapped to one of three parts of the loop:
        </Typography>
        <Box my={4}>
          <MobiusLoopHero displayContent={false} />
        </Box>
        <Typography variant="h6" gutterBottom>
          Foundation - we have found that cultural practices and technical
          practices in the foundational layer, accelerate and maximize the use
          of the Mobius Loop.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Discovery - practices to help define target outcomes.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Options - practices to help identify the path to the right outcomes
        </Typography>
        <Typography variant="h6" gutterBottom>
          Delivery - practices to put your ideas to the test. Learn what works
          and what doesn’t.
        </Typography>
      </Box>
      <Box my={4} display="flex" justifyContent="center">
        <Button
          variant="outlined"
          color="primary"
          endIcon={<ArrowForwardIcon />}
          onClick={() => navigate("/")}
        >
          Explore Library
        </Button>
      </Box>
    </Box>
  );
};

export default ProcessModel;
