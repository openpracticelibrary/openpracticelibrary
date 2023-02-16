import React from "react";
import { Link as ExternalLink } from "@mui/material";
import { Link } from "gatsby";
import { Typography, Box } from "@mui/material";

const ResourceListItem = ({ children, description, listItemKey, url }) => {
  var linkValue;
  var validUrl = true;
  try {
    linkValue = new URL(url);
  } catch (TypeError) {
    validUrl = false;
  }
  return (
    <>
      <Box display="flex">
        <Box>{children}</Box>
        <Box>
          {validUrl && linkValue.hostname === "openpracticelibrary.com" ? (
            <Link to={linkValue.pathname}>
              <Typography variant="body1" key={listItemKey}>
                {description}
              </Typography>
            </Link>
          ) : (
            <ExternalLink href={url} target="_blank" rel="noopener noreferrer">
              <Typography variant="body1" key={listItemKey}>
                {description}
              </Typography>
            </ExternalLink>
          )}
        </Box>
      </Box>
    </>
  );
};
export default ResourceListItem;
