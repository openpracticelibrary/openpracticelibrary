import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import FooterLogoSection from "./FooterLogoSection";
import FooterLinkSection from "./FooterLinkSection";
import { Grid, Box, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(6, 0),
  },
  trueWhiteColor: {
    backgroundColor: theme.palette.common.white,
  }
}));

export default function BodyFooter() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.trueWhiteColor}>
        <Divider/>
        <Box
          p={6}
          component="footer"
          data-testid="footer"
        >
          <Grid container>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={10}>
              <Box display="flex">
                <Box flexShrink={1}>
                  <FooterLogoSection/>
                </Box>
                <Box width="100%">
                  <FooterLinkSection/>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
