import React from "react";
import { Avatar } from "@mui/material";
import { AvatarGroup } from '@mui/material';
import { Person } from "@mui/icons-material";

const EditorPhotos = (props) => (
  <AvatarGroup max={3}>
    {props.editors.map((editor, i) => (
      <Avatar
        key={i}
        src={`https://github.com/${editor.github}.png`}
        bgcolor="transparent"
      >
        <Person />
      </Avatar>
    ))}
  </AvatarGroup>
);

export default EditorPhotos;
