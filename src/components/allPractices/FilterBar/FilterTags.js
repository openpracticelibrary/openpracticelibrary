import React from "react";
import { Box, Chip, Select, MenuItem, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Tag = ({ tag, filter, selectedFilter }) => {
  const buttonRef = React.useRef(null);
  const hashtag = tag === "All" ? tag : `#${tag}`;

  return (
    <Chip
      clickable
      label={hashtag}
      ref={buttonRef}
      onClick={() => filter({ type: "mobiusFilterChange", content: tag })}
      variant={selectedFilter === tag ? "default" : "outlined"}
    />
  );
};

const FilterTags = ({ filter, selectedFilter, tags }) => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <div data-testid="filterTags">
      {matches ? (
        <Box
          display="flex"
          justifyContent="space-between"
          spacing={2}
          width={{ xs: "100%", lg: "30rem" }}
        >
          {tags.map(tag => (
            <Tag
              key={tag}
              tag={tag}
              selectedFilter={selectedFilter}
              filter={filter}
            />
          ))}
        </Box>
      ) : (
        <Select
          variant="outlined"
          fullWidth
          value={selectedFilter}
          onChange={event =>
            filter({ type: "mobiusFilterChange", content: event.target.value })
          }
        >
          {tags.map(tag => (
            <MenuItem value={tag} key={tag}>
              <Typography variant="body2">
                {tag === "All" ? tag : `#${tag}`}
              </Typography>
            </MenuItem>
          ))}
        </Select>
      )}
    </div>
  );
};

export default FilterTags;
