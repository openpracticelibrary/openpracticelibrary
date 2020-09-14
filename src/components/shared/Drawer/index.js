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
    zIndex: 1002,
    pointerEvents: "none",
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
    pointerEvents: "auto"
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

export default OPLDrawer;
