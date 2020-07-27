import React from "react";
import { useTheme } from "@material-ui/core/styles";
import CloseIcon from '@material-ui/icons/Close';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import { EditIcon } from "../../../assets/icons";

import { IconButton, Box } from '@material-ui/core';

import OplTooltip from "../../shared/components/OplTooltip";

const StartEditingButton = (props) => (
  <Box ml={-6}>
    <OplTooltip
      title="Edit Practice"
      placement="top"
    >
      <IconButton data-testid="editButton" onClick={props.handleEdit}>
        <EditIcon height="20" />
      </IconButton>
    </OplTooltip>
  </Box>
);

const EditingButtons = (props) => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexDirection="column"
      bgcolor="white"
      borderRadius={20}
      boxShadow="0 1px 4px 0 rgba(16,16,16,0.29)"
      ml={-6}
    >
      <IconButton>
        <EditIcon fill={theme.palette.primary.main} height="20" />
      </IconButton>
      <OplTooltip
        title="Save Edits"
        placement="left"
      >
        <IconButton data-testid="saveEditButton" onClick={props.handleSaveEdits}>
          <SaveOutlinedIcon />
        </IconButton>
      </OplTooltip>
      <OplTooltip
        title="Cancel Edits"
        placement="left"
      >
        <IconButton data-testid="closeEditButton" onClick={props.handleEdit}>
          <CloseIcon />
        </IconButton>
      </OplTooltip>
    </Box>
  );
};

export { StartEditingButton, EditingButtons }
