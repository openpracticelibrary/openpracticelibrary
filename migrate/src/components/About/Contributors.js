import React from "react";

import PracticeCount from "./PracticeCount";
import ContentCircle from "./ContentCircle";
import ContributorCount from "./ContributorCount";
import { Box, Grid, Typography } from "@material-ui/core";

const Contributors = () => (
  <Box data-testid="communityHeader" my={8}>
    <Typography gutterBottom variant="h4" component="h3" color="primary">
      Community Driven
    </Typography>
    <Typography gutterBottom>
      This project relies on an active and involved community, and we really
      appreciate your support. To date we currently have:
    </Typography>
    <Box marginTop={2}>
      <Grid container justify="center" spacing={4}>
        <Grid item>
          <ContentCircle>
            <Typography variant="h1" component="h5" color="primary">
              <PracticeCount color="primary" />
            </Typography>

            <Typography variant="h6" align="center">
              Product Lifecycle Practices
            </Typography>
          </ContentCircle>
        </Grid>
        <Grid item>
          <ContentCircle>
            <Typography variant="h1" component="h5" color="primary">
              <ContributorCount color="primary" />
            </Typography>
            <Typography variant="h6" align="center">
              Creative Commons Contributors
            </Typography>
          </ContentCircle>
        </Grid>
      </Grid>
    </Box>
  </Box>
);

export default Contributors;
