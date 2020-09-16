import React from "react";
import { Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import { Person } from "@material-ui/icons";

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
