import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import HeroColor from "../../components/shared/HeroColor";
import FeedbackIcon from "../../assets/images/about-feedback.svg";

const Feedback = () => (
  <HeroColor color="common.black" height="18rem" px={4} type="gradient">
    <Grid container justify="space-between" alignItems="center">
      <Grid item md={1}>
        <img width="100%" color="black" src={FeedbackIcon} alt="Feedback" />
      </Grid>
      <Grid item md={7}>
        <Typography variant="h4" data-testid="feedbackMsg">
          Please give us feedback
        </Typography>
        <Typography variant="h5">
          We are human-centered at our core and rely on user feedback for
          product iterations.
        </Typography>
      </Grid>
      <Grid item md={3}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="https://forms.gle/nXCvPEkjx6VdF6Px6"
          target="_blank"
          rel="noopener"
        >
          Share Thoughts
        </Button>
      </Grid>
    </Grid>
  </HeroColor>
);

export default Feedback;
