import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { BottomListItems, TopListItems } from "./ListItems";
import Footer from "./Footer";
import { Drawer, IconButton, Box, Typography } from "@material-ui/core";

const drawerWidth = "18.75rem";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  paddedLogo: {
    paddingTop: theme.spacing(2)
  },
  paddedHamburger: {
    marginLeft: 20,
    color: theme.palette.primary.main
  },
  box: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  boxShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth})`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    height: "100%",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    backgroundColor: theme.palette.common.white,
    "&::-webkit-scrollbar": {
      display: "none"
    }
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(8) + 1
    },
    backgroundColor: theme.palette.common.white
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    paddingTop: theme.spacing(2),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  }
}));

export default function OPLDrawer(props) {
  const classes = useStyles();
  const { open, toggle } = props;

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        PaperProps={{
          elevation: 5
        }}
        data-testid="drawer"
      >
        <div className={classes.toolbar}>
          <Typography variant="h6" color="primary">
            Open Practice Library
          </Typography>
          <IconButton
            onClick={toggle}
            className={clsx(classes.paddedHamburger)}
            data-testid="drawerActions"
          >
            <MenuIcon />
          </IconButton>
        </div>

        {open && (
          <>
            <Box m={2}>
              <Box>
                <TopListItems drawerOpen={open} toggle={toggle} />
              </Box>
              <Box>
                <BottomListItems />
              </Box>
            </Box>
            <Footer />
          </>
        )}
      </Drawer>
      <Box bgcolor="common.white" width="100%">
        {props.children}
      </Box>
    </div>
  );
}
