import React from "react";
import { Button, Grid } from "@mui/material";
import { navigate } from "gatsby";
import mobiusContent from "../../utilities/mobuisContent";

const FilterBar = ({ selectedFilter }) => {
  const selected = selectedFilter.toLowerCase();
  return (
    <Grid container spacing={1} justifyContent="center">
      <Grid item xs={12} md={2}>
        <Button
          color="grey"
          disableElevation={selected === "all"}
          fullWidth
          onClick={() => navigate("/")}
          size="small"
          startIcon={mobiusContent["all"].icon}
          variant="contained"
        >
          All
        </Button>
      </Grid>
      <Grid item xs={6} md={2}>
        <Button
          color={selected === "foundation" ? "mobiusFoundation" : "grey"}
          disableElevation={selected === "foundation"}
          fullWidth
          data-testid="foundation-button"
          onClick={() => navigate("/tags/foundation")}
          size="small"
          startIcon={mobiusContent["foundation"].icon}
          variant="contained"
        >
          Foundation
        </Button>
      </Grid>
      <Grid item xs={6} md={2}>
        <Button
          color={selected === "discovery" ? "mobiusDiscover" : "grey"}
          data-testid="discovery-button"
          disableElevation={selected === "discovery"}
          fullWidth
          onClick={() => navigate("/tags/discovery")}
          size="small"
          startIcon={mobiusContent["discovery"].icon}
          variant="contained"
        >
          Discover
        </Button>
      </Grid>
      <Grid item xs={6} md={2}>
        <Button
          color={selected === "options" ? "mobiusDecide" : "grey"}
          data-testid="options-button"
          disableElevation={selected === "options"}
          fullWidth
          onClick={() => navigate("/tags/options")}
          size="small"
          startIcon={mobiusContent["options"].icon}
          variant="contained"
        >
          Decide
        </Button>
      </Grid>
      <Grid item xs={6} md={2}>
        <Button
          color={selected === "delivery" ? "mobiusDeliver" : "grey"}
          data-testid="delivery-button"
          disableElevation={selected === "delivery"}
          fullWidth
          onClick={() => navigate("/tags/delivery")}
          size="small"
          startIcon={mobiusContent["delivery"].icon}
          variant="contained"
        >
          Deliver
        </Button>
      </Grid>
    </Grid>
  );
};

export default FilterBar;
