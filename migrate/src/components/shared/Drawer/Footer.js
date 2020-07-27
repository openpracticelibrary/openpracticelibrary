import React from "react";
import FooterList from "./FooterList";
import Disclaimer from "./Disclaimer";
import { Box, Grid } from "@material-ui/core";
import { PodIcon, WebLinkIcon } from "../../../assets/icons";

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
            link="https://forms.gle/nXCvPEkjx6VdF6Px6"
            text="SEND FEEDBACK"
          >
            <WebLinkIcon size="small" />
          </FooterList>
        </Grid>
        <Grid item>
          <FooterList
            link="https://podcasts.apple.com/us/podcast/open-practice-podcast/id1501715186"
            text="OUR PODCAST"
          >
            <PodIcon />
          </FooterList>
        </Grid>
        <Grid item>
          <Disclaimer />
        </Grid>
      </Grid>
    </Box>
  );
}
