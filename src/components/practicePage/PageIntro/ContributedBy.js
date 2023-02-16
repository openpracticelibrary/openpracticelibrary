import React from "react";
import moment from "moment";
import PhotoAndName from "./PhotoAndName";
import EditorPhotos from "./EditorPhotos";
import { Typography, Grid, Box } from "@mui/material";

export default function ContributedBy(props) {
  const authors = props.authors ? props.authors.filter((a) => a) : [];
  const formatDate = (date) => {
    return moment(date).format("MMMM D, YYYY");
  };

  let contributors = [];
  let editors = [];

  if (authors && authors.length > 2) {
    contributors = authors.slice(0, 2);
    editors = authors.slice(2, authors.length);
  } else {
    contributors = authors;
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
        justifyContent="flex-start"
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
            Published{" "}
            {props.preview ? formatDate(props.createdAt) : props.createdAt}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
