import React from "react";
import DefaultImage from "./hero.jpg";
import { Box } from "@material-ui/core";
import BackgroundImage from "gatsby-background-image";

const HeroImage = ({
  children,
  opacity = 0.5,
  bgPos = "center",
  imageUrl = DefaultImage,
  height = "100vh",
}) => {
  return (
    <BackgroundImage
      style={{
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
        backgroundPosition: `${bgPos}`,
        backgroundRepeat: "none",
      }}
      fluid={[
        `linear-gradient(rgba(0,0,0,${opacity}), rgba(0,0,0,${opacity}))`,
        imageUrl,
      ]}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        minHeight={height}
        flexWrap="wrap"
      >
        {children}
      </Box>
    </BackgroundImage>
  );
};

export default HeroImage;
