import React from 'react'
import {useDropzone} from 'react-dropzone'
import { RootRef, Paper } from '@material-ui/core';

function PaperDropzone() {
  const {getRootProps, getInputProps} = useDropzone()
  const {ref, ...rootProps} = getRootProps()

  return (
    <RootRef
      rootRef={ref}>
      <Paper {...rootProps}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </Paper>
    </RootRef>
  );
}

export default PaperDropzone;

