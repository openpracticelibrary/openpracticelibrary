import React from "react";
import { Button, Box, Typography } from "@material-ui/core";
import { navigate } from "@reach/router";

const Explore = props => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      alignContent="center"
      justifyContent="space-around"
      height="10rem"
      bgcolor="grey.200"
      px={4}
    >
      <Typography variant="h5" data-testid="exploreMsg">
        Learn something new from your peers and experiment with best practices!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        data-testid="exploreLibraryButton"
        onClick={() => navigate("/")}
      >
        Let's Go!
      </Button>
    </Box>
  );
};

export default Explore;
