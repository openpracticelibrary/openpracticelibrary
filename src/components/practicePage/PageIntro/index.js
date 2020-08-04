import React from "react";
import TitleAndSubtitle from "./TitleAndSubtitle";
import ContributedBy from "./ContributedBy";
import Collection from "../../shared/Collection";
import { Container, Typography } from "@material-ui/core";

const PageIntro = ({
  title,
  tags,
  subtitle,
  editing,
  titleEdit,
  subtitleEdit,
  authors,
  createdAt,
  updatedAt,
  practiceId,
  upvotes,
  imgCount,
  questions,
}) => (
  <Container maxWidth="md">
    <TitleAndSubtitle
      title={title}
      tags={tags}
      subtitle={subtitle}
      editing={editing}
      titleEdit={titleEdit}
      subtitleEdit={subtitleEdit}
    />
    <ContributedBy
      authors={authors}
      createdAt={createdAt}
      updatedAt={updatedAt}
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
