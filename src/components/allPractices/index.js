import React from "react";
import { Box, Container } from "@material-ui/core";
import MobiusLoopHero from "../shared/MobiusLoopHero";
import FilterTags from "./FilterTags";

const Practices = ({
  children,
  handleFilterChange,
  mobiusLoopArray,
  selectedMobiusLoopFilter,
}) => (
  <>
    <MobiusLoopHero displaySection={selectedMobiusLoopFilter} />
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent="space-around"
      alignItems="center"
      py={3}
      data-testid="popularFilterComponent"
    >
      <FilterTags
        tags={mobiusLoopArray}
        filter={handleFilterChange}
        selectedFilter={selectedMobiusLoopFilter}
      />
    </Box>
    <Container maxWidth="md">{children}</Container>
  </>
);

export default Practices;
