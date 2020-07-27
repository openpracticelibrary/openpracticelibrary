import React from "react";
import { withTheme } from "@material-ui/core/styles";
import { AvatarGroup } from "@material-ui/lab";

import OplAvatar from "../../shared/components/OplAvatar";
import { UserIcon } from "../../../assets/icons";

const EditorPhotos = props => (
  <AvatarGroup max={3}>
    {props.editors.map(editor => (
      <OplAvatar
        key={editor.id}
        src={editor.Avatar}
        height={props.theme.spacing(3)}
        width={props.theme.spacing(3)}
        bgcolor="transparent"
      >
        <UserIcon />
      </OplAvatar>
    ))}
  </AvatarGroup>
);

export default withTheme(EditorPhotos);

