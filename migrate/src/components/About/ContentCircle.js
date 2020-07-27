import React from "react";
import { Box } from "@material-ui/core";

const ContentCircle = ({
  children,
  borderColor = "text.primary",
  size = "22rem"
}) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    width={size}
    height={size}
    borderRadius="50%"
    border={1}
    borderColor={borderColor}
    p={4}
    textAlign="center"
  >
    {children}
  </Box>
);
export default ContentCircle;
