import React from "react";
import DefaultImage from "./hero.jpg";
import { Box } from "@mui/material";
import BackgroundImage from "gatsby-background-image";

const HeroImage = ({
  children,
  opacity = 0.5,
  bgPos = "center",
  imageUrl,
  height = "100vh",
}) => {
  if (imageUrl) {
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
  } else {
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
          ), url(${DefaultImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "none",
        backgroundPosition: `${bgPos}`,
      }}
    >
      {children}
    </Box>
    )

  }
};

export default HeroImage;
