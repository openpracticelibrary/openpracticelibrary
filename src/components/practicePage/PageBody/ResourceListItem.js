import React from "react";
import { Link as ExternalLink } from "@material-ui/core";
import { Link } from "gatsby";
import { Typography, Box } from "@material-ui/core";

const ResourceListItem = ({ children, description, listItemKey, url }) => {
  const linkValue = new URL(url);
  return (
    <>
      <Box display="flex">
        <Box>{children}</Box>
        <Box>
          {linkValue.hostname === "openpracticelibrary.com" ? (
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
