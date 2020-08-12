import React from "react";
import Helmet from "react-helmet";
import favicon from "../assets/images/favicon.ico";
import HeroImage from "../components/shared/HeroImage";
import ProcessModel from "../components/Learn/ProcessModel";
import Explore from "../components/Learn/Explore";
import Partnerships from "../components/Learn/Partnerships";
import { ArrowDownward } from "@material-ui/icons";
import { Box, Button, Typography } from "@material-ui/core";
import Logo from "../components/shared/Logo";

const scrollTo = React.createRef();
const scrollDown = () => {
  scrollTo.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const Learn = () => (
  <>
    <Helmet>
      <link rel="icon" href={favicon} />
      <title>Open Practice Library</title>
      <meta name="description" content="Practices that empower teams to collaborate and deliver iteratively" />
    </Helmet>
    <Box display="flex" flexDirection="column">
      <Box position="absolute" top="2rem" left="2rem" color="common.white">
        <Logo color="common.white" />
      </Box>
      <HeroImage opacity={0.6}>
        <Box mx={8} color="common.white" textAlign="center" width="100%">
          <Typography color="inherit" variant="h2" gutterBottom>
            Move past the buzzwords to deliver real business value, quickly.
          </Typography>
          <Box marginBottom={6}>
            <Typography component="p" variant="h5">
              The Open Practice Library is an open source, community-driven, and
              community-inspired library of best practices and tools that help
              individuals, teams and entire businesses figure out the best way to
              get to the best outcome.
            </Typography>
          </Box>
          <Box mx="auto">
            <Button
              size="large"
              variant="contained"
              color="secondary"
              endIcon={<ArrowDownward />}
              onClick={scrollDown}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </HeroImage>
      <Box maxWidth="60rem" alignSelf="center" mx={6}>
        <div ref={scrollTo} />
        <Box my={6}>
          <Typography variant="h5" gutterBottom>
            That can mean a lot of things to alot of different kinds of people.
            And the Open Practice Library can help all of them.
          </Typography>
          <Typography gutterBottom>
            - A product owner who needs to build the right thing, the right way.
          </Typography>
          <Typography gutterBottom>
            - A team lead who wants to get everyone’s input toward and aligned to
            the same goal.
          </Typography>
          <Typography gutterBottom>
            - A stakeholder who needs a roadmap to deliver metrics-based business
            outcomes.
          </Typography>
          <Box marginTop={2}>
            <Typography component="p" variant="body1">
              For everyone, these practices are created, tested and shared by the
              people who use them day-to-day. The practices are for the people
              looking to be inspired with new ideas to create better experiences.
              And anyone who wants to find innovative, proven ways to solve their
              challenges, big and small.
            </Typography>
          </Box>
        </Box>
        <ProcessModel />
        <Partnerships />
      </Box>
      <Explore />
    </Box>
  </>
);

export default Learn;
