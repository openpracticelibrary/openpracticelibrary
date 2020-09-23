import React from "react";
import { Box, Container, Hidden } from "@material-ui/core";
import MobiusLoopHero from "../shared/MobiusLoopHero";
import FilterBar from "./FilterBar";
import Logo from "../../components/shared/Logo";

const Practices = ({ children, selectedMobiusLoopFilter }) => (
  <Container maxWidth="md">
    <Hidden xsDown implementation="css">
      <Box marginTop={2} marginBottom={3}>
        <Logo data-testid="site-logo" small horizontal />
      </Box>
    </Hidden>
    <MobiusLoopHero displaySection={selectedMobiusLoopFilter} />
    <Box my={{ xs: 1, md: 2, lg: 4 }}>
      <FilterBar selectedFilter={selectedMobiusLoopFilter} />
    </Box>
    {children}
  </Container>
);

export default Practices;
