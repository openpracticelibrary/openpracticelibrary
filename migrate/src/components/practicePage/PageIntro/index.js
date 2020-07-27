import React from "react";
import TitleAndSubtitle from "./TitleAndSubtitle";
import ContributedBy from "./ContributedBy";
import Collection from "./Collection";

import OplGrid from "../../shared/components/OplGrid";

const PageIntro = (props) => (
  <OplGrid
    container
    direction="column"
    justify="flex-start"
    alignItems="flex-start"
    my={5}
  >
    <OplGrid item>
      <TitleAndSubtitle
        title={props.title}
        tags={props.tags}
        subtitle={props.subtitle}
        editing={props.editing}
        titleEdit={props.titleEdit}
        subtitleEdit={props.subtitleEdit}
      >
        {props.children}
      </TitleAndSubtitle>
    </OplGrid>
    <OplGrid item>
      <ContributedBy
        authors={props.authors}
        createdAt={props.createdAt}
        updatedAt={props.updatedAt}
      />
    </OplGrid>
    <OplGrid item>
      <Collection
        practiceId={props.practiceId}
        upvotes={props.upvotes}
        imgCount={props.imgCount}
        questions={props.questions}
      />
    </OplGrid>
  </OplGrid>
);

export default PageIntro;
