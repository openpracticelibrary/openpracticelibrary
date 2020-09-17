import React from "react";
import { Grid } from "@material-ui/core";
import { navigate } from "gatsby";
import FilterButton from "./FilterButton";
import mobiusContent from "../../utilities/mobuisContent";

const FilterBar = ({ selectedFilter }) => {
  const selected = selectedFilter.toLowerCase();
  return (
    <Grid container spacing={1} justify="center">
      <Grid item xs={12} md={2}>
        <FilterButton
          a
          color="default"
          onClick={() => navigate("/")}
          size="small"
          variant="contained"
          disableElevation={selected === "all"}
          fullWidth
          startIcon={mobiusContent["all"].icon}
        >
          All
        </FilterButton>
      </Grid>
      <Grid item xs={6} md={2}>
        <FilterButton
          onClick={() => navigate("/tags/foundation")}
          a
          color={selected === "foundation" ? "primary" : "default"}
          fullWidth
          variant="contained"
          disableElevation={selected === "foundation"}
          size="small"
          startIcon={mobiusContent["foundation"].icon}
        >
          Foundation
        </FilterButton>
      </Grid>
      <Grid item xs={6} md={2}>
        <FilterButton
          onClick={() => navigate("/tags/discovery")}
          a
          color={selected === "discovery" ? "secondary" : "default"}
          fullWidth
          variant="contained"
          disableElevation={selected === "discovery"}
          size="small"
          startIcon={mobiusContent["discovery"].icon}
        >
          Discovery
        </FilterButton>
      </Grid>
      <Grid item xs={6} md={2}>
        <FilterButton
          onClick={() => navigate("/tags/options")}
          a
          color={selected === "options" ? "options" : "default"}
          fullWidth
          variant="contained"
          disableElevation={selected === "options"}
          size="small"
          startIcon={mobiusContent["options"].icon}
        >
          Options
        </FilterButton>
      </Grid>
      <Grid item xs={6} md={2}>
        <FilterButton
          onClick={() => navigate("/tags/delivery")}
          a
          color={selected === "delivery" ? "delivery" : "default"}
          fullWidth
          variant="contained"
          disableElevation={selected === "delivery"}
          size="small"
          startIcon={mobiusContent["delivery"].icon}
        >
          Delivery
        </FilterButton>
      </Grid>
    </Grid>
  );
};
export default FilterBar;
