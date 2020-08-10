import React, { useEffect } from "react";
import PracticeCard from "./PracticeCard";
import { Grid } from "@material-ui/core";

const PracticeCardGrid = (props) => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      !props.onLoadMore
    )
      return;
    props.onLoadMore(props.page);
  }
  return (
    <Grid container data-testid="practicecardgrid" justify="center">
      {props.practices.map((practice) => {
        let allTags = [];
        if(practice.node.frontmatter.tags) {
          allTags = [...practice.node.frontmatter.tags];
        } if(practice.node.frontmatter.mobiusTag) {
          allTags = [...allTags,practice.node.frontmatter.mobiusTag];
        }

        return (
          <PracticeCard
            key={practice.node.id}
            practiceId={practice.node.id}
            practiceTitle={practice.node.frontmatter.title}
            coverImage={practice.node.frontmatter.icon}
            tags={allTags}
            slug={practice.node.fields.slug}
            subtitle={practice.node.frontmatter.subtitle}
            mediaGallery={
              practice.node.frontmatter.mediaGallery
                ? practice.node.frontmatter.mediaGallery.length
                : 0
            }
          />
        );
      })}
    </Grid>
  );
};

export default PracticeCardGrid;
