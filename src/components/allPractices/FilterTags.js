import React from "react";
import { Box, Chip, Select, MenuItem, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { navigate } from "gatsby";
import Hidden from "@material-ui/core/Hidden";

const Tag = ({ tag, filter, selectedFilter }) => {
  const buttonRef = React.useRef(null);
  const hashtag = tag === "All" ? tag : `#${tag}`;

  return (
    <Chip
      clickable
      label={hashtag}
      data-testid={tag}
      ref={buttonRef}
      size="large"
      onClick={() => {
        tag.toLowerCase() === "all"
          ? navigate("/")
          : navigate("/tags/" + tag.toLowerCase());
      }}
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
          {tags.map((tag) => (
            <Tag
              key={tag}
              tag={tag}
              selectedFilter={selectedFilter}
              filter={filter}
            />
          ))}
        </Box>
      ) : (
        <Hidden smUp>
          <Select
            variant="outlined"
            fullWidth
            value={selectedFilter}
            onChange={(event) => {
              const tag = event.target.value.toLowerCase();
              tag === "all"
                ? navigate("/")
                : navigate("/tags/" + event.target.value.toLowerCase());
            }}
          >
            {tags.map((tag) => (
              <MenuItem value={tag} key={tag} data-testid={tag}>
                <Typography variant="body2">
                  {tag === "All" ? tag : `#${tag}`}
                </Typography>
              </MenuItem>
            ))}
          </Select>
        </Hidden>
      )}
    </div>
  );
};

export default FilterTags;
