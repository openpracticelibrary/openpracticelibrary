import React from "react";
import { Box } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

// hooks into theme for linear gradient choices
const HeroColor = ({
  children,
  color = "common.white",
  bgcolor = "common.white",
  gradient = 0,
  height = "15vh",
  type = "color",
  width = 1,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      alignItems="center"
      bgcolor={bgcolor}
      color={color}
      height={height}
      width={width}
      style={{
        backgroundImage:
          type === "gradient" ? theme.linearGradient[gradient] : null
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default HeroColor;
