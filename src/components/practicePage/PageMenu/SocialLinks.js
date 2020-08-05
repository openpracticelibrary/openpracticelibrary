import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  EmailShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  FacebookShareButton,
} from "react-share";
import {
  Facebook,
  Reddit,
  Pinterest,
  MoreVert,
  LinkedIn,
  MailOutline,
  Twitter,
} from "@material-ui/icons";
import { Typography, Grid, IconButton, Popover } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    textAlign: "center",
    alignContent: "center",
  },
  drawerPaper: {
    borderRadius: "10px",
    borderWidth: "3px",
    borderColor: theme.palette.primary.main,
    borderStyle: "solid",
    textAlign: "center",
    padding: theme.spacing(2, 4),
  },
}));

const StyledPopover = (props) => (
  <Popover
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
);

export default function SocialLinks(props) {
  const classes = useStyles();
  const [loc, setLoc] = React.useState(null);

  useEffect(() => {
    setLoc(window.location.href);
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Grid container direction="row" className={classes.root} spacing={1}>
        <Grid item>
          <Typography className={classes.url} variant="overline">
            Share{" "}
          </Typography>
        </Grid>
        <Grid item>
          <EmailShareButton url={loc}>
            <MailOutline />
          </EmailShareButton>
        </Grid>
        <Grid item>
          <TwitterShareButton url={loc}>
            <Twitter />
          </TwitterShareButton>
        </Grid>
        <Grid item>
          <LinkedinShareButton url={loc}>
            <LinkedIn />
          </LinkedinShareButton>
        </Grid>
        <Grid item>
          <IconButton aria-describedby={id} onClick={handleClick}>
            <MoreVert />
          </IconButton>
          <StyledPopover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            PaperProps={{
              className: classes.drawerPaper,
            }}
          >
            <Grid
              container
              direction="row"
              className={classes.root}
              spacing={2}
            >
              <Grid item>
                <PinterestShareButton url={loc} media={props.coverImage}>
                  <Pinterest />
                </PinterestShareButton>
              </Grid>
              <Grid item>
                <RedditShareButton url={loc}>
                  <Reddit />
                </RedditShareButton>
              </Grid>
              <Grid item>
                <FacebookShareButton url={loc}>
                  <Facebook />
                </FacebookShareButton>
              </Grid>
            </Grid>
          </StyledPopover>
        </Grid>
      </Grid>
    </>
  );
}
