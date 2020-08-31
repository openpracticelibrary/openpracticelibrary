import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { Feedback, Mic } from "@material-ui/icons";
import { CCHeart } from "../../../assets/icons/index";

const DrawerFooter = () => (
  <Box marginTop="auto" m={2}>
    <List>
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
    </List>
    <Box display="flex" alignItems="center">
      <CCHeart />
      <Typography variant="caption">
        Except where otherwise noted, content on this site is licensed under a
        Creative Commons Attribution 4.0 International license.
      </Typography>
    </Box>
  </Box>
);
export default DrawerFooter;
