import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { navigate } from "gatsby";

const Explore = props => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="10rem"
      bgcolor="grey.300"
      px={4}
    >
      <Typography gutterBottom variant="h5" data-testid="exploreMsg">
        Learn something new from your peers and experiment with best practices!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        data-testid="exploreLibraryButton"
        endIcon={<ArrowForward />}
        onClick={() => navigate("/")}
      >
        Explore the Library
      </Button>
    </Box>
  );
};

export default Explore;
