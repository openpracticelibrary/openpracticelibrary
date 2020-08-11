import React from "react";
import FooterList from "./FooterList";
import Disclaimer from "./Disclaimer";
import { Box, Grid } from "@material-ui/core";
import { Feedback, Mic } from "@material-ui/icons";

export default function Footer() {
  return (
    <Box component="footer" p={3} color="grey.600" marginTop="auto">
      <Grid
        container
        direction="column"
        justify="flex-end"
        alignItems="flex-start"
      >
        <Grid item>
          <FooterList
            link="https://forms.gle/tg5STmZmb2m6HwA87"
            text="SEND FEEDBACK"
          >
            <Feedback />
          </FooterList>
        </Grid>
        <Grid item>
          <FooterList
            link="https://podcasts.apple.com/us/podcast/open-practice-podcast/id1501715186"
            text="OUR PODCAST"
          >
            <Mic />
          </FooterList>
        </Grid>
        <Grid item>
          <Disclaimer />
        </Grid>
      </Grid>
    </Box>
  );
}
