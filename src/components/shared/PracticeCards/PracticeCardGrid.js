import React, { useEffect } from "react";
import PracticeCard from "./PracticeCard";
import ComponentLoading from "../QueryState/ComponentLoading";
import { Grid } from "@material-ui/core";

const PracticeCardGrid = props => {
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
  console.log('data - ', props);
  return (
    <Grid container data-testid="practicecardgrid">
      {props.practices.map(practice => (
        <PracticeCard
          key={practice.node.id}
          practiceId={practice.node.id}
          practiceTitle={practice.node.frontmatter.title}
          coverImage={practice.node.frontmatter.coverImage}
          tags={practice.node.frontmatter.tags}
          slug={practice.node.fields.slug}
          subtitle={practice.node.frontmatter.subtitle}
        />
      ))}
    </Grid>
  );
};

export default PracticeCardGrid;
