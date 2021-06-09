import React from "react";
import {
  AllInclusive,
  Terrain,
  Loop,
  Telegram,
  Explore,
} from "@material-ui/icons";

const useMobiusContent = {
  foundation: {
    color: "primary.dark",
    icon: <Terrain />,
  },
  discovery: {
    color: "secondary.main",
    icon: <Explore />,
  },
  options: {
    color: "error.main",
    icon: <Loop />,
  },
  delivery: {
    color: "warning.main",
    icon: <Telegram />,
  },
  all: {
    icon: <AllInclusive />,
    color: "grey.400",
  },
};

export default useMobiusContent;
