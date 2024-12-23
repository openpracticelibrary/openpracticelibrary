import React from "react";
import ContributedBy from "./ContributedBy";
import Collection from "../../shared/Collection";
import { Box, Container, Typography } from "@mui/material";
import mobiusContent from "../../../utilities/mobuisContent";

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
  mobiusTag,
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
    <Box display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center" pr={3} minWidth="fit-content">
    <Typography variant="overline">A practice of</Typography>
      {mobiusContent[mobiusTag.toLowerCase()].icon}
      <Typography variant="h7" data-testid={"mobiusTag"}>
        { "options" === mobiusTag ? "DECIDE" : mobiusTag.toUpperCase()}
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
