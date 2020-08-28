import React from "react";
import { Typography, Box, Grid, Chip } from "@material-ui/core";
import { LocalOffer } from "@material-ui/icons";

const TitleAndSubtitle = ({ subtitle, tags, title }) => (
  <Box display="flex" flexDirection="column" marginTop={3}>
    <Typography variant="h2" gutterBottom data-testid="title">
      {title}
    </Typography>
    <Box marginBottom={3}>
      <Grid container spacing={1}>
        {tags &&
          tags.map((t, i) => (
            <Grid item>
              <Chip icon={<LocalOffer />} label={`${t}`} key={i} size="small" />
            </Grid>
          ))}
      </Grid>
    </Box>
    <Typography variant="h5" data-testid={"subtitle"}>
      {subtitle}
    </Typography>
  </Box>
);

export default TitleAndSubtitle;
