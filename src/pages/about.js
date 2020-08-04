import React from "react";
import { Box, Typography } from "@material-ui/core";
import HeroColor from "../components/shared/HeroColor";
import HistoryValues from "../components/About/HistoryValues";
import ProductTeam from "../components/About/ProductTeam";
import Feedback from "../components/About/Feedback";
import Contributors from "../components/About/Contributors";
import OplDrawer from "../components/shared/Drawer";

export default function About(props) {
  return (
    <OplDrawer>
      <Box data-testid="aboutPageGrid" display="flex" flexDirection="column">
        <HeroColor type="gradient" gradient={1}>
          <Box px={6}>
            <Typography component="h1" variant="h3" data-testid="hellotext">
              About Us
            </Typography>
          </Box>
        </HeroColor>
        <Box maxWidth="70rem" alignSelf="center" mx={6}>
          <HistoryValues />
          <ProductTeam />
          <Contributors />
        </Box>
        <Feedback />
      </Box>
    </OplDrawer>
  );
}
