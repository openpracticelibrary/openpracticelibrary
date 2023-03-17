import React from "react";
import ContributedBy from "./ContributedBy";
import Collection from "../../shared/Collection";
import { Box, Container, Typography } from "@mui/material";

const PageIntro = ({
  title,
  allTags,
  subtitle,
  authors,
  createdAt,
  updatedAt,
  practiceId,
  upvotes,
  imgCount,
  questions,
  date,
  preview,
}) => (
  <Container maxWidth="md">
    <Box display="flex" flexDirection="column" marginTop={3}>
      <Typography variant="h2" data-testid="title">
        {title}
      </Typography>
      <Typography variant="h5" data-testid={"subtitle"}>
        {subtitle}
      </Typography>
    </Box>
    <ContributedBy
      authors={authors}
      createdAt={date}
      updatedAt={updatedAt}
      preview={preview}
    />

    <Collection
      spacing={2}
      practiceId={practiceId}
      upvotes={upvotes}
      imgCount={imgCount}
      questions={questions}
      alignment={2}
    >
      <Typography variant="overline">Collection</Typography>
    </Collection>
  </Container>
);

export default PageIntro;
