import React from "react";
import PhotoAndName from "./PhotoAndName";
import EditorPhotos from "./EditorPhotos";
import { Typography, Grid, Box } from "@material-ui/core";

export default function ContributedBy(props) {
  let contributors = [];
  let editors = [];

  if (props.authors && props.authors.length > 2) {
    contributors = props.authors.slice(0, 2);
    editors = props.authors.slice(2, props.authors.length);
  } else {
    contributors = props.authors;
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      my={2}
    >
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-end"
      >
        <Box mr={2}>
          <Typography variant="overline">Contributed by</Typography>
          <Grid item>
            <Box display="flex" flexDirection="row">
              {contributors &&
                contributors.map((author, i) => (
                  <PhotoAndName
                    key={i}
                    authorName={author.title}
                    avatar={`https://github.com/${author.github}.png`}
                  />
                ))}
            </Box>
          </Grid>
        </Box>
        {editors && editors.length > 0 && (
          <Box mr={3}>
            <Typography variant="overline">Edited by</Typography>
            <Grid item>
              <EditorPhotos editors={editors} />
            </Grid>
          </Box>
        )}
        <Grid item>
          <Typography variant="overline" data-testid={"dates"}>
            Published {props.createdAt}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
