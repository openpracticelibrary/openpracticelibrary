import React from "react";
import { Typography, Box, Grid } from "@material-ui/core";
import FooterIconSection from "./FooterIconSection";
import { navigate } from "@reach/router";

const sections = [
  { title: "Practices", url: "/practice" },
  { title: "About", url: "/about" },
  { title: "Terms", url: "https://creativecommons.org/licenses/by-sa/4.0/" },
];

export default function FooterLogoSection() {
  return (
    <>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="flex-end"
        spacing={2}
      >
        <Grid item>
          <Grid
            container
            direction="row"
            spacing={3}
          >
            {sections.map((section, i) => (
              <Grid item key={i}>
                <Box color="grey.A400">
                  <Typography
                    variant="button"
                    onClick={() => navigate(section.url)}
                  >
                    {section.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            spacing={2}
            alignItems="center"
          >
            <Grid item>
              <Box
                color="common.black"
                fontWeight={500}
              >
                <Typography
                  variant="button"
                  data-testid="connect"
                >
                  Please connect with us:
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <FooterIconSection />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
