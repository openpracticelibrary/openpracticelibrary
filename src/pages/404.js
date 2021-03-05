import React from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import { navigate } from "gatsby";
import { random } from "lodash";
import HeroColor from "../components/shared/HeroColor";
import Stickies from "../assets/images/whiteboarding.png";

const content = [
  "In the middle of an Options Pivot, sorry!",
  "Still trying to figure out this user flow!",
  'Looks like we forgot about the "WHAT" here!',
];

const NotFound = () => (
  <HeroColor type="gradient" gradient={random(1, 3)} height="100vh">
    <Box
      maxWidth="90%"
      display="flex"
      flexDirection="column"
      mx="auto"
      textAlign="center"
      alignItems="center"
    >
      <Typography component="h2" variant="h3" color="inherit" gutterBottom>
        {content[random(0, 2)]}
      </Typography>
      <Box maxWidth="80rem">
        <img src={Stickies} alt="Living Sticky Notes" width="100%" />
      </Box>

      <Typography variant="h4" color="inherit" gutterBottom>
        404: Page Not Found
        </Typography>
      <Grid
        container
        direction="row"
        justify="center"
        spacing={2}
      >
        <Grid item>
          <Button
            onClick={() => navigate(-1)}
            variant="contained"
            color="default"
            size="lg"
            mx={2}
          >
            Head on Back
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={() => navigate('/', { replace: true })}
            variant="contained"
            color="default"
            size="lg"
            mx={2}
          >
            Go Home
          </Button>
        </Grid>
      </Grid>
    </Box>
  </HeroColor>
);

export default NotFound;
