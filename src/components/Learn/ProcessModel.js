import React from "react";
import { Link } from "gatsby";
import { Box, Typography } from "@material-ui/core";
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
          Practices can be mapped to one of four parts of the loop:
        </Typography>
        <Box my={4}>
          <MobiusLoopHero showContent={false} />
        </Box>
        <Typography variant="h6" gutterBottom>
          <Link href="/tags/foundation">Foundation</Link> - we have found that
          cultural practices and technical practices in the foundational layer,
          accelerate and maximize the use of the Mobius Loop.
        </Typography>
        <Typography variant="h6" gutterBottom>
          <Link href="/tags/discovery">Discovery</Link> - practices to help
          define target outcomes.
        </Typography>
        <Typography variant="h6" gutterBottom>
          <Link href="/tags/options">Options</Link> - practices to help identify
          the path to the right outcomes
        </Typography>
        <Typography variant="h6" gutterBottom>
          <Link href="/tags/delivery">Delivery</Link> - practices to put your
          ideas to the test. Learn what works and what doesn’t.
        </Typography>
      </Box>
    </Box>
  );
};

export default ProcessModel;
