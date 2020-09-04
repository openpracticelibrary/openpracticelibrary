import React from "react";
import PracticeCard from "./PracticeCard";
import { Grid } from "@material-ui/core";

const PracticeCardGrid = (props) => {
  return (
    <Grid container spacing={2} data-testid="practicecardgrid">
      {props.practices.map((practice) => {
        let allTags = [];
        if (practice.node.frontmatter.tags) {
          allTags = [...practice.node.frontmatter.tags];
        }
        if (practice.node.frontmatter.mobiusTag) {
          allTags = [...allTags, practice.node.frontmatter.mobiusTag];
        }

        const placeholder =
          "https://github.com/openpracticelibrary/opl-media/blob/master/images/Needs%20an%20Image.png?raw=true";

        console.log("here");
        console.log(practice.node.frontmatter);
        return (
          <PracticeCard
            key={practice.node.id}
            coverImage={
              practice.node.frontmatter.icon
                ? practice.node.frontmatter.icon.childImageSharp.fluid
                : placeholder
            }
            practiceId={practice.node.id}
            practiceTitle={practice.node.frontmatter.title}
            slug={practice.node.fields.slug}
            subtitle={practice.node.frontmatter.subtitle}
            tags={allTags}
            mobiusTag={practice.node.frontmatter.mobiusTag}
          />
        );
      })}
    </Grid>
  );
};

export default PracticeCardGrid;
