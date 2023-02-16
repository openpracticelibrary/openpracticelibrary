import React from "react";
import { Box, Container, Typography } from "@mui/material";
import HeroColor from "../components/shared/HeroColor";
import HistoryValues from "../components/About/HistoryValues";
import ProductTeam from "../components/About/ProductTeam";
import Contributors from "../components/About/Contributors";
import Layout from "../components/Layout";

export default function About(props) {
  return (
    <Layout
      ogContent={{
        title: "Open Practice Library",
        desc:
          "Practices that empower teams to collaborate and deliver iteratively",
        image:
          "https://openpracticelibrary.github.io/opl-media/images/opl-logo.png",
      }}
    >
      <Box data-testid="aboutPageGrid" display="flex" flexDirection="column">
        <HeroColor type="gradient" gradient={1}>
          <Container maxWidth="md">
            <Typography component="h1" variant="h3" data-testid="hellotext">
              About Us
            </Typography>
          </Container>
        </HeroColor>
        <Container maxWidth="md">
          <HistoryValues />
          <ProductTeam />
          <Contributors />
        </Container>
      </Box>
    </Layout>
  );
}
