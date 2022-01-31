import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Feedback, Mic } from "@material-ui/icons";

const DrawerFooter = () => (
  <Box marginTop="auto" m={2}>
    <List>
      <ListItem
        button
        component="a"
        href="https://anchor.fm/openpracticelibrary"
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
        href="https://forms.gle/tyKLtvFf39MoWqsv7"
        target="_blank"
        rel="noreferrer"
      >
        <ListItemIcon>
          <Feedback />
        </ListItemIcon>
        <ListItemText primary="Send Feedback" />
      </ListItem>
    </List>
  </Box>
);
export default DrawerFooter;
