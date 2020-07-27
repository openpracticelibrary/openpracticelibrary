import React from "react";

import { Box, Typography } from "@material-ui/core";
import MobiusLoopHero from "../shared/MobiusLoopHero";
import FilterTags from "./FilterBar/FilterTags";
import KeywordSearchToggle from "./FilterBar/KeywordSearchToggle";
import DropDownSelectionFilter from "./FilterBar/DropDownSelectionFilter";
import KeywordSearchBox from "./FilterBar/KeywordSearchBox";
import PopularFilter from "./FilterBar/PopularFilter";

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
  toggleKeywordSearch
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
      <PopularFilter
        selectedItem={selectedPopularFilter}
        handleFilterChange={handleFilterChange}
        menuItems={Object.keys(popularMenuItems)}
      />
      <FilterTags
        tags={mobiusLoopArray}
        filter={handleFilterChange}
        selectedFilter={selectedMobiusLoopFilter}
      />
      <KeywordSearchToggle
        toggle={toggleKeywordSearch}
        keywordSearchToggle={keywordSearchToggle}
      />
    </Box>

    {keywordSearchToggle && (
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-around"
        alignItems="center"
        py={3}
        data-testid="popularFilterComponent"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Typography variant="overline" color="textSecondary">
            By Tags
          </Typography>
          <DropDownSelectionFilter
            inputLabel="Advanced Filters"
            items={filterTags}
            selectedFilter={selectedFilterTag}
            handleFilterSelect={handleFilterChange}
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Typography variant="overline" color="textSecondary">
            Keyword Search
          </Typography>
          <KeywordSearchBox dispatch={handleFilterChange} />
        </Box>
      </Box>
    )}
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
