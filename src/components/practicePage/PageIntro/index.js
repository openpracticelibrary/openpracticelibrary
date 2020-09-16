import React from "react";
import TitleAndSubtitle from "./TitleAndSubtitle";
import ContributedBy from "./ContributedBy";
import Collection from "../../shared/Collection";
import { Container, Typography } from "@material-ui/core";

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
    <TitleAndSubtitle title={title} tags={allTags} subtitle={subtitle} />
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
