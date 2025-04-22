import React from "react";
import ContributedBy from "./ContributedBy";
import Collection from "../../shared/Collection";
import { Button, Box, Container, Grid, Typography } from "@mui/material";
import mobiusContent from "../../../utilities/mobuisContent";
import { navigate } from "gatsby";

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

function fixMobiusTag(mobiusTag) {
  const mobiusTagLowerCase = mobiusTag.toLowerCase()
  switch (mobiusTagLowerCase) {
    case "discovery":
      return "discover"
    case "options":
      return "decide"
    case "delivery":
      return "deliver"
    default:
      return mobiusTagLowerCase;
  }
}

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
}) => {
  const fixedMobiusTag = fixMobiusTag(mobiusTag)
  return (<Container maxWidth="md">
    <Box display="flex" flexDirection="column" marginTop={3}>
      <Typography variant="h2" data-testid="title">
        {title}
      </Typography>
      <Typography variant="h5" data-testid={"subtitle"}>
        {subtitle} - {mobiusTag}
      </Typography>
    </Box>
    <Grid container spacing={1} justifyContent="left">
      <Grid item xs={6} md={2}>
        <Button
          color={"mobius" + capitalizeFirstLetter(fixedMobiusTag)}
          disableElevation="true"
          fullWidth
          data-testid={fixedMobiusTag + "-button"}
          onClick={() => navigate("/tags/" + mobiusTag.toLowerCase())}
          size="small"
          startIcon={mobiusContent[mobiusTag.toLowerCase()].icon}
          variant="contained"
        >
          {fixedMobiusTag.toUpperCase()}
        </Button>
      </Grid>
    </Grid>
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
  </Container>)
};

export default PageIntro;
