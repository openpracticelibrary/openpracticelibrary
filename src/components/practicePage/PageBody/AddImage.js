import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { useDropzone } from 'react-dropzone';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CloseIcon from '@material-ui/icons/Close';

import AddImage from "../../../assets/images/add.png";

import {
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  Chip,
  InputAdornment,
  IconButton,
  Button,
  TextField,
  CircularProgress,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cardImg: {
    verticalAlign: "middle",
    height: "69px",
    width: "92px",
  },
  dialog: {
    borderRadius: "17px",
    borderWidth: "3px",
    borderColor: theme.palette.grey["700"],
    borderStyle: "solid",
  },
  title: {
    textAlign: "center",
  },
  chips: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
  },
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  dropzone: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    minHeight: "9.375rem",
    alignContent: "center",
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    borderWidth: "2px",
    borderRadius: "2px",
    borderColor: theme.palette.grey["700"],
    borderStyle: "dashed",
    backgroundColor: theme.palette.common.white,
    color: theme.palette.grey["700"],
    outline: "none",
    transition: "border .24s ease-in-out",
  },
  filesAdded: {
    margin: theme.spacing(2,0),
  },
  buttons: {
    borderRadius: "17px",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: theme.palette.grey["700"],
  },
}));

const AddImageCard = (props) => {
  const [open, setOpen] = React.useState(false);
  const [files, setFiles] = React.useState([]);
  const linkInputRef = React.useRef();
  const {
    getRootProps,
    getInputProps,
  } = useDropzone({
    accept: "image/*",
    onDrop: acceptedFiles => {
      acceptedFiles.forEach(async (file) => {
          console.log('added a file');
      });
    }
  });
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setFiles([]);
    setOpen(false);
  };

  const handleSubmit = async () => {
    const prevMediaGallery = props.currentMediaGallery.map(file => { return { link: file.link } });
    const additionsGallery = files.map(file => { return { link: file.url } });
    const newGallery = prevMediaGallery.concat(additionsGallery);
    console.log('Updated!');
  };

  const handleAddLink = () => {
    if (linkInputRef.current.value.includes(",")) {
      const multiFiles = linkInputRef.current.value.split(",").map(link => {
        return {
          url: link.trim(),
          direct: true
        }
      });
      setFiles([...files, ...multiFiles]);
    } else {
      const newFile = { url: linkInputRef.current.value, direct: true };
      setFiles([...files, newFile]);
    }

    linkInputRef.current.value = "";
  };

  const AddLinkButton = () => (
    <InputAdornment position="end">
      <IconButton onClick={handleAddLink}>
        <AddCircleOutlineOutlinedIcon />
      </IconButton>
    </InputAdornment>
  );

  const accepted = files.map((file, i) => {
    return (<Chip key={i} label={file.url} className={classes.chips} />);
  });

  return (
    <>
      <img src={AddImage} alt="Add new media" className={classes.cardImg} onClick={handleClickOpen} />
      <Dialog
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        PaperProps={{
          className: classes.dialog
        }}
      >
        <DialogTitle id="form-dialog-title" className={classes.title} disableTypography={true}>
          <Typography variant={"subtitle2"}>Add a new link to the media gallery</Typography>
        </DialogTitle>
        <DialogContent>
          <Box className="container">
            <Box className={classes.dropzone} {...getRootProps()}>
              <input {...getInputProps()} />
              <Typography variant={"overline"} paragraph={true}>
                    Drop some images here, or click to select images
              </Typography>
              <Typography variant={"overline"}>
                <em>Or Paste a link to an image or YouTube video</em>
              </Typography>
            </Box>
            <TextField
              variant="outlined"
              margin="dense"
              id="name"
              label="Image or YouTube Web Link"
              inputRef={linkInputRef}
              InputProps={{
                endAdornment: <AddLinkButton />
              }}
              fullWidth
            />
            <Box className={classes.filesAdded}>
              <Typography variant={"overline"}>Uploaded Files</Typography>
              <Box>
                {accepted}
              </Box>
            </Box>
          </Box>
          <Box>
            <Button onClick={handleSubmit} className={classes.buttons} variant="contained">
                Submit Links <ArrowForwardIcon />
            </Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddImageCard;
