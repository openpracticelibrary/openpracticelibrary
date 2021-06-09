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
          disableElevation={selected === "all"}
          fullWidth
          onClick={() => navigate("/")}
          size="small"
          startIcon={mobiusContent["all"].icon}
          variant="contained"
        >
          All
        </FilterButton>
      </Grid>
      <Grid item xs={6} md={2}>
        <FilterButton
          a
          color={selected === "foundation" ? "primary" : "default"}
          disableElevation={selected === "foundation"}
          fullWidth
          data-testid="foundation-button"
          onClick={() => navigate("/tags/foundation")}
          size="small"
          startIcon={mobiusContent["foundation"].icon}
          variant="contained"
        >
          Foundation
        </FilterButton>
      </Grid>
      <Grid item xs={6} md={2}>
        <FilterButton
          a
          color={selected === "discovery" ? "secondary" : "default"}
          data-testid="discovery-button"
          disableElevation={selected === "discovery"}
          fullWidth
          onClick={() => navigate("/tags/discovery")}
          size="small"
          startIcon={mobiusContent["discovery"].icon}
          variant="contained"
        >
          Discovery
        </FilterButton>
      </Grid>
      <Grid item xs={6} md={2}>
        <FilterButton
          a
          color={selected === "options" ? "options" : "default"}
          data-testid="options-button"
          disableElevation={selected === "options"}
          fullWidth
          onClick={() => navigate("/tags/options")}
          size="small"
          startIcon={mobiusContent["options"].icon}
          variant="contained"
        >
          Options
        </FilterButton>
      </Grid>
      <Grid item xs={6} md={2}>
        <FilterButton
          a
          color={selected === "delivery" ? "delivery" : "default"}
          data-testid="delivery-button"
          disableElevation={selected === "delivery"}
          fullWidth
          onClick={() => navigate("/tags/delivery")}
          size="small"
          startIcon={mobiusContent["delivery"].icon}
          variant="contained"
        >
          Delivery
        </FilterButton>
      </Grid>
    </Grid>
  );
};
export default FilterBar;
