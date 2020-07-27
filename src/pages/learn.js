import React from "react";
import Hero from "../components/Learn/Hero";
import ProcessModel from "../components/Learn/ProcessModel";
import Explore from "../components/Learn/Explore";
import Partnerships from "../components/Learn/Partnerships";

import { Box, Typography } from "@material-ui/core";

export default function Learn(props) {
  const scrollRef = React.createRef();

  return (
    <Box display="flex" flexDirection="column">
      <Hero navigate={props.navigate} scrollTo={scrollRef} />
      <Box maxWidth="60rem" alignSelf="center" mx={6}>
        <div ref={scrollRef} />
        <Box my={6}>
          <Typography component="p" variant="h5" gutterBottom>
            The Open Practice Library is an open source, community-driven, and
            community-inspired library of best practices and tools that help
            individuals, teams and entire businesses figure out the best way to
            get to the best outcome.
          </Typography>
          <Typography gutterBottom>
            That can mean a lot of things to alot of different kinds of people.
            And the Open Practice Library can help all of them.
          </Typography>
          <Typography>
            - A product owner who needs to build the right thing, the right way.
          </Typography>
          <Typography>
            - A team lead who wants to get everyone’s input toward and aligned
            to the same goal.
          </Typography>
          <Typography>
            - A stakeholder who needs a roadmap to deliver metrics-based
            business outcomes.
          </Typography>
          <Box marginTop={3}>
            <Typography component="p" variant="h6">
              For everyone, these practices are created, tested and shared by
              the people who use them day-to-day. The practices are for the
              people looking to be inspired with new ideas to create better
              experiences. And anyone who wants to find innovative, proven ways
              to solve their challenges, big and small.
            </Typography>
          </Box>
        </Box>
        <ProcessModel />
        <Partnerships />
      </Box>
      <Explore />
    </Box>
  );
}
