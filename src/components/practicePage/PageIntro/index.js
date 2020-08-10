import React from "react";
import TitleAndSubtitle from "./TitleAndSubtitle";
import ContributedBy from "./ContributedBy";
import Collection from "../../shared/Collection";
import { Container, Typography } from "@material-ui/core";

const PageIntro = ({
  title,
  tags,
  mobiusTags,
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
  date
}) => (
  <Container maxWidth="md">
    <TitleAndSubtitle
      title={title}
      tags={[...tags,...mobiusTags]}
      subtitle={subtitle}
      editing={editing}
      titleEdit={titleEdit}
      subtitleEdit={subtitleEdit}
    />
    <ContributedBy
      authors={authors}
      createdAt={date}
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
