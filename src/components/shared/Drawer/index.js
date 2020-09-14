import React from "react";
import { useRef, useReducer } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(theme => ({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: "300px",
    background: "#fff",
  },
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    width: "300px",
    zIndex: 10000,
  },
  button: {
    cursor: "pointer",
    position: "absolute",
    [theme.breakpoints.down("sm")]: {
      bottom: "18px",
      left: "15px",
    },
    [theme.breakpoints.up("md")]: {
      top: "18px",
      left: "15px",
    },
  }})
);

const sidebar = {
  open: (height = 1000) => ({
    backgroundColor: "white",
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    backgroundColor: "transparent",
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const OPLDrawer = () => {
  const [isOpen, toggleOpen] = useReducer((drawerOpen) => !drawerOpen, false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const classes = useStyles();

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={classes.nav}
    >
      <motion.div className={classes.root} variants={sidebar} />
      <Navigation />
      <Fab
        color="primary"
        disableFocusRipple
        data-testid="drawerActions"
        onClick={() => toggleOpen()}
        className={classes.button}
      >
        {!isOpen ? <MenuIcon /> : <CloseIcon />}
      </Fab>
    </motion.nav>
  );
};

// import React, { useReducer } from "react";
// import { Drawer, Fab, Hidden, Box } from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";
// import CloseIcon from "@material-ui/icons/Close";
// import ListItems from "./ListItems";
// import DrawerFooter from "./DrawerFooter";
// import Logo from "../../../components/shared/Logo";

// const OPLDrawer = () => {
  // const [open, toggle] = useReducer((drawerOpen) => !drawerOpen, false);
  // return (
    // <>
      // <Hidden smDown implementation="js">
        // <Drawer
          // variant="permanent"
          // data-testid="drawer"
          // PaperProps={{ elevation: 5 }}
          // open={open}
        // >
          // <Box
            // display="flex"
            // alignItems="center"
            // justifyContent="space-between"
            // paddingTop={2}
            // px={2}
          // >
            // {open ? (
              // <Box marginRight={2}>
                // <Logo small horizontal />
              // </Box>
            // ) : null}
            // <Fab
              // color="primary"
              // disableFocusRipple
              // data-testid="drawerActions"
              // onClick={toggle}
              // size="small"
            // >
              // {!open ? <MenuIcon /> : <CloseIcon />}
            // </Fab>
          // </Box>
          // {open && (
            // <>
              // <ListItems drawerOpen={open} toggle={toggle} />
              // <DrawerFooter />
            // </>
          // )}
        // </Drawer>
      // </Hidden>
      // <Hidden mdUp>
        // <Box position="fixed" bottom={0} m={1}>
          // <Fab
            // edge={false}
            // onClick={toggle}
            // disableFocusRipple
            // data-testid="drawerActions"
            // color="primary"
          // >
            // <MenuIcon color="" />
          // </Fab>
        // </Box>
        // <Drawer
          // variant="temporary"
          // data-testid="drawer"
          // open={open}
          // transitionDuration={200}
        // >
          // <Box height="100vh" position="relative">
            // <Box
              // display="flex"
              // alignItems="center"
              // justifyContent="space-between"
              // paddingTop={2}
              // px={2}
            // >
              // <Logo small horizontal />
            // </Box>
            // <ListItems drawerOpen={open} toggle={toggle} />
            // <DrawerFooter />
            // <Box position="absolute" bottom={0} right={0} m={1}>
              // <Fab
                // onClick={toggle}
                // disableFocusRipple
                // data-testid="drawerActions"
                // color="primary"
              // >
                // <CloseIcon />
              // </Fab>
            // </Box>
          // </Box>
        // </Drawer>
      // </Hidden>
    // </>
  // );
// };
export default OPLDrawer;
