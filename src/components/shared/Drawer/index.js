import React, { useReducer } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, IconButton, Box } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { BottomListItems, TopListItems } from "./ListItems";
import DrawerFooter from "./DrawerFooter";
import Logo from "../../../components/shared/Logo";

const drawerWidth = "18.75rem";
const useStyles = makeStyles((theme) => ({
  box: {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  boxShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth})`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    height: "100%",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(8) + 1,
    },
  },
}));

export default function OPLDrawer(props) {
  const classes = useStyles();
  const [open, toggle] = useReducer((drawerOpen) => !drawerOpen, false);
  return (
    <Box display="flex">
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        PaperProps={{
          elevation: 5,
        }}
        data-testid="drawer"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          paddingTop={2}
          px={2}
        >
          {open ? <Logo small horizontal /> : null}
          <IconButton onClick={toggle} data-testid="drawerActions">
            <MenuIcon color="primary" />
          </IconButton>
        </Box>
        {open && (
          <>
            <Box m={2}>
              <TopListItems drawerOpen={open} toggle={toggle} />
            </Box>
            <DrawerFooter />
          </>
        )}
      </Drawer>

      <Box bgcolor="common.white" width="100%">
        {props.children}
      </Box>
    </Box>
  );
}
