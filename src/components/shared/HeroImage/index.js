import React from "react";
import DefaultImage from "./hero.jpg";
import { Box } from "@material-ui/core";

const HeroImage = ({
  children,
  opacity = 0.5,
  bgPos = "center",
  imageUrl = DefaultImage,
  height = "100vh"
}) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      minHeight={height}
      flexWrap="wrap"
      style={{
        backgroundImage: `linear-gradient(
            rgba(0, 0, 0, ${opacity}),
            rgba(0, 0, 0, ${opacity})
          ), url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "none",
        backgroundPosition: `${bgPos}`,
      }}
    >
      {children}
    </Box>
  );
};

export default HeroImage;
