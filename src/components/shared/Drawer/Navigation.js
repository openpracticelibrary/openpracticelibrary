import React from "react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "gatsby";
import {
  Divider,
  ListItem,
  ListSubheader,
  List,
  Typography,
} from "@material-ui/core";
import ListItems from "./ListItems";
import DrawerFooter from "./DrawerFooter";

const variantMenu = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const Navigation = () => (
  <>
    <motion.ul variants={variantMenu}>
      <ListItems />
    </motion.ul>
    <motion.ul variants={variantMenu}>
      <DrawerFooter />
    </motion.ul>
  </>
);
