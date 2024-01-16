import React from "react";
import { Box } from "@mui/material";
import LogoImage from "./logo.svg";

const Logo = ({
  color = "text.primary",
  small = false,
  horizontal = false,
  ...rest
}) => {
  return (
    <a href="/">
		<Box display="flex" alignItems="center" {...rest}>
		  <Box width={small ? "2.5rem" : "5.5rem"}>
			<img width="100%" src={LogoImage} alt="Open Practice Library Logo" />
		  </Box>
		  <Box
			ml={small ? 1 : 2}
			color={color}
			fontFamily="fontFamily"
			fontWeight={500}
			fontSize={small ? ".75rem" : "1.125rem"}
			display="flex"
			style={{
			  textTransform: "uppercase",
			}}
			width={horizontal ? "100%" : "5rem"}
		  >
			Open Practice Library
		  </Box>
		</Box>
    </a>
  );
};

export default Logo;
