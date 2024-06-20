import React from "react";
import {
  AllInclusive,
  Terrain,
  Loop,
  Telegram,
  Explore,
} from "@mui/icons-material";

const useMobiusContent = {
  foundation: {
    color: "mobiusFoundation.main",
    icon: <Terrain />,
  },
  discovery: {
    color: "mobiusDiscover.main",
    icon: <Explore />,
  },
  options: {
    color: "mobiusDecide.main",
    icon: <Loop />,
  },
  delivery: {
    color: "mobiusDeliver.main",
    icon: <Telegram />,
  },
  all: {
    icon: <AllInclusive />,
    color: "grey.400",
  },
};

export default useMobiusContent;
