import React from "react";

import { Box } from "@material-ui/core";
import MobiusLoopHero from "../shared/MobiusLoopHero";
import FilterTags from "./FilterBar/FilterTags";

const Practices = ({
  children,
  filterTags,
  handleFilterChange,
  keywordSearchToggle,
  mobiusLoopArray,
  popularMenuItems,
  selectedFilterTag,
  selectedPopularFilter,
  selectedMobiusLoopFilter,
  toggleKeywordSearch,
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
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      alignContent="center"
      mx={6}
    >
      {children}
    </Box>
  </>
);

export default Practices;
