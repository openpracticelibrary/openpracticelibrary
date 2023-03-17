import React from "react";
import { Box, Typography, Link } from "@mui/material";
const PartnerLink = ({ altText, caption, imageSrc, title, url }) => (
  <Box
    alignItems="center"
    display="flex"
    flexDirection="column"
    width={{ xs: 1, md: 1 / 3 }}
    mx={2}
  >
    <img src={imageSrc} alt={altText} />
    <Link href={url} target="_blank">
      <Typography gutterBottom variant="h6">
        {title}
      </Typography>
    </Link>
    <Typography variant="subtitle1">{caption}</Typography>
  </Box>
);
export default PartnerLink;
