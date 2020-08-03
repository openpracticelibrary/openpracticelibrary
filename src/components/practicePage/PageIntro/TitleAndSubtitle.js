import React from "react";
import { Typography, Box, Grid, Chip } from "@material-ui/core";
import { LocalOffer } from "@material-ui/icons";

const TitleAndSubtitle = ({
  editing,
  subtitle,
  subtitleEdit,
  tags,
  title,
  titleEdit,
}) => (
  <Box display="flex" flexDirection="column">
    <Typography variant="h2" data-testid="title">
      {editing ? titleEdit : title}
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
    <Typography gutterBottom variant="h5" data-testid={"subtitle"}>
      {editing ? subtitleEdit : subtitle}
    </Typography>
  </Box>
);

export default TitleAndSubtitle;
