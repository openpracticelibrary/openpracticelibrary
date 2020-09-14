import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Feedback, Mic } from "@material-ui/icons";

const variants = {
  open: {
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -1 }
    }
  },
  closed: {
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const DrawerFooter = () => (
  <Box marginTop="auto" m={2}>
    <List>
      <motion.li variants={variants}>
        <ListItem
          button
          component="a"
          href="https://podcasts.apple.com/us/podcast/open-practice-podcast/id1501715186"
          target="_blank"
          rel="noreferrer"
        >
          <ListItemIcon>
            <Mic />
          </ListItemIcon>
          <ListItemText primary="Our Podcast" />
        </ListItem>
      </motion.li>
      <motion.li variants={variants}>
        <ListItem
          button
          component="a"
          href="https://forms.gle/tg5STmZmb2m6HwA87"
          target="_blank"
          rel="noreferrer"
        >
          <ListItemIcon>
            <Feedback />
          </ListItemIcon>
          <ListItemText primary="Send Feedback" />
        </ListItem>
      </motion.li>
    </List>
  </Box>
);
export default DrawerFooter;
