import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles/index";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { AddIcon } from "../../../assets/icons";
import isValidURL from "url-validation";
import Filter from "bad-words";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  MenuItem,
  TextField,
  Grid,
  Tooltip,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(1),
    margin: theme.spacing(1),
  },
  container: {
    flexShrink: 0,
  },
  space: {
    paddingRight: theme.spacing(2),
  },
  drawerPaper: {
    borderRadius: "17px",
    borderWidth: "3px",
    borderStyle: "solid",
    display: "flex",
    textAlign: "center",
    padding: theme.spacing(3),
  },

  dialogText: {
    margin: theme.spacing(1),
  },
  submitButton: {
    margin: theme.spacing(1),
    borderRadius: "32px",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "#596562",
  },
  arrowForward: {
    top: ".25em",
    position: "relative",
  },
  btnText: {
    padding: theme.spacing(1),
    color: theme.palette.grey["900"],
  },
  color: {
    color: theme.palette.grey["900"],
  },
  errorTooltip: {
    border: "1px solid red",
  },
}));

export default function ResourceAddLink(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [linkType, setLinkType] = useState('');
  const [urlValid, setUrlValid] = useState(true);
  const [textValid, setTextValid] = useState(true);
  const [thankYouOpen, setThankYouOpen] = useState(false);
  const [linkUrlTooltip, setLinkUrlTooltip] = useState(false);
  const [linkDescTooltip, setLinkDescTooltip] = useState(false);

  const refLinkUrl = useRef();
  const refLinkDesc = useRef();

  const isURLValid = () => {
    setLinkUrlTooltip(false);
    const res = isValidURL(refLinkUrl.current.value);
    setUrlValid(res);
  };

  const isValidText = () => {
    setLinkDescTooltip(false);
    const filter = new Filter();
    const hasBadWords = filter.isProfane(refLinkDesc.current.value);
    if (!refLinkDesc.current.value || hasBadWords) {
      setTextValid(false);
      setLinkDescTooltip(true);
      return;
    }
    setTextValid(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!refLinkUrl.current.value || !urlValid) {
      setLinkUrlTooltip(true);
      return;
    }

    if (!refLinkDesc.current.value || !textValid) {
      setLinkDescTooltip(true);
      return;
    }

    setLinkUrlTooltip(false);
    setLinkDescTooltip(false);

    const prevResourceList = props.prevResources.map(resource => {
      return {
        link: resource.link,
        linkType: resource.linkType,
        description: resource.description
      }
    });

    const additionalResource = [
      {
        link: refLinkUrl.current.value,
        linkType: linkType || "web",
        description: refLinkDesc.current.value,
      }
    ];
    const newResources = prevResourceList.concat(additionalResource);
      handleClose(true);
      setThankYouOpen(true);
  };

  const handleClickListItem = (event) => {
    setLinkType(event.target.value)
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event) => {
    setOpen(false);
    setLinkUrlTooltip(false);
    setLinkType('');
    refLinkUrl.current.value = "";
    refLinkDesc.current.value = "";
  };

  const handleThankYouClose = () => {
    setThankYouOpen(false);
  };

  const handleThankYouSubmit = () => {
    setThankYouOpen(false);
    setOpen(true);
  };

  return (
    <>
      <Box className={classes.root}>
        <Box>{props.children}</Box>
        <Box>
          <Button
            startIcon={<AddIcon fill="#1975ff"/>}
            onClick={handleClickOpen}
            data-testid="addResourcesButton"
          >
              Add a link
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="link-type-dialog-title"
            PaperProps={{
              className: classes.drawerPaper,
            }}
          >
            <DialogTitle disableTypography={true} id="link-type-dialog-title">
              <Typography
                variant="subtitle2"
                className={classes.dialogText}
                data-testid="addResourceForm"
              >
                Add a link you love!
              </Typography>
            </DialogTitle>
            <DialogContent className={classes.container}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={5}>
                  <TextField
                    id="selectedLinkType"
                    select
                    label="Link Type"
                    variant="outlined"
                    margin="dense"
                    value={linkType}
                    onChange={handleClickListItem}
                    fullWidth
                  >
                    {props.linkTypes.map((option, index) => (
                      <MenuItem
                        key={index}
                        value={option}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={7}>
                  <Tooltip
                    open={linkUrlTooltip}
                    title="Link URL must be a valid URL"
                    placement="bottom-end"
                    classes={{ tooltip: classes.errorTooltip }}
                  >
                    <TextField
                      required
                      error={!urlValid}
                      onChange={isURLValid}
                      margin="dense"
                      id="link"
                      label="Link URL"
                      type="url"
                      variant="outlined"
                      inputRef={refLinkUrl}
                      fullWidth
                    />
                  </Tooltip>
                </Grid>
                <Grid item xs={12}>
                  <Tooltip
                    open={linkDescTooltip}
                    title="Link Description must be appropriate"
                    placement="bottom-end"
                    classes={{ tooltip: classes.errorTooltip }}
                  >
                    <TextField
                      required
                      error={!textValid}
                      onChange={isValidText}
                      margin="dense"
                      id="description"
                      label="Link Description"
                      type="text"
                      variant="outlined"
                      inputRef={refLinkDesc}
                      fullWidth
                    />
                  </Tooltip>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Button
                    onClick={handleSubmit}
                    variant="contained"
                    className={classes.submitButton}
                  >
                    <Typography
                      variant="button"
                      className={classes.btnText}
                    >
                      Contribute this link <ArrowForwardIcon className={classes.arrowForward} />
                    </Typography>
                  </Button>
                </Grid>
                <Grid item>
                  <Typography variant="overline">
                    *Required fields :)
                  </Typography>
                </Grid>
              </Grid>
            </DialogActions>
          </Dialog>
          <Dialog
            open={thankYouOpen}
            onClose={handleThankYouClose}
            aria-labelledby="thank-you-dialog"
            PaperProps={{
              className: classes.drawerPaper,
            }}
          >
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <DialogTitle disableTypography={true} id="thank-you-dialog">
                  <Typography
                    variant="subtitle2"
                    className={classes.dialogText}
                  >
                    Awesome.<br/>Thanks for that!
                  </Typography>
                </DialogTitle>
              </Grid>
              <Grid item>
                <DialogActions>
                  <Button
                    onClick={handleThankYouSubmit}
                    variant="contained"
                    className={classes.submitButton}
                  >
                    <Typography
                      variant="button"
                      className={classes.btnText}
                    >
                      <ArrowBack className={classes.arrowForward} /> Add another link
                    </Typography>
                  </Button>
                </DialogActions>
              </Grid>
            </Grid>
          </Dialog>
        </Box>
      </Box>
    </>
  );
}
