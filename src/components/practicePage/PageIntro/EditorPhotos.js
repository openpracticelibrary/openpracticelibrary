import React from "react";
import { withTheme } from "@material-ui/core/styles";
import { AvatarGroup } from "@material-ui/lab";
import { Person } from "@material-ui/icons";
import OplAvatar from "../../shared/components/OplAvatar";

const EditorPhotos = (props) => (
  <AvatarGroup max={3}>
    {props.editors.map((editor, i) => (
      <OplAvatar
        key={i}
        src={`https://github.com/${editor.github}.png`}
        height={props.theme.spacing(4)}
        width={props.theme.spacing(4)}
        bgcolor="transparent"
      >
        <Person />
      </OplAvatar>
    ))}
  </AvatarGroup>
);

export default withTheme(EditorPhotos);
