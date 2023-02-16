import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Feedback, Mic } from "@mui/icons-material";

const DrawerFooter = () => (
  <Box
    sx={(theme) => ({
      margin: `auto ${theme.spacing(2)} ${theme.spacing(2)}`,
    })}
  >
    <List>
      <ListItemButton
        component="a"
        href="https://anchor.fm/openpracticelibrary"
        target="_blank"
        rel="noreferrer"
      >
        <ListItemIcon>
          <Mic />
        </ListItemIcon>
        <ListItemText primary="Our Podcast" />
      </ListItemButton>
      <ListItemButton
        component="a"
        href="https://forms.gle/tyKLtvFf39MoWqsv7"
        target="_blank"
        rel="noreferrer"
      >
        <ListItemIcon>
          <Feedback />
        </ListItemIcon>
        <ListItemText primary="Send Feedback" />
      </ListItemButton>
    </List>
  </Box>
);

export default DrawerFooter;
