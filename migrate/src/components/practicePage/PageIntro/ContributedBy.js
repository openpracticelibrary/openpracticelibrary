import React from "react";
import moment from "moment";
import PhotoAndName from "./PhotoAndName";
import EditorPhotos from "./EditorPhotos";
import { Typography, Grid, Box } from '@material-ui/core';

export default function ContributedBy(props) {
  const formatDate = (date) => {
    return moment(date).format("MMMM D, YYYY");
  };
  let contributors = [];
  let editors = [];

  if (props.authors.length > 2) {
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
              {contributors.map((author, i) => (
                <PhotoAndName
                  key={author.id}
                  authorName={`${author.firstName} ${author.lastName}`}
                  authorLink={author.mediaLink}
                  avatar={author.Avatar}
                />
              ))}
            </Box>
          </Grid>
        </Box>
        { (editors.length > 0) &&
        <Box mr={3}>
          <Typography variant="overline">Edited by</Typography>
          <Grid item>
            <EditorPhotos editors={editors} />
          </Grid>
        </Box>
        }
        <Grid item>
          <Typography variant="overline" data-testid={"dates"}>
                Published {formatDate(props.createdAt)} | Last edited{" "}
            {formatDate(props.updatedAt)}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
