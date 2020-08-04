import React from "react";
import { useLottie, Lottie } from "react-lottie-hook";
import { makeStyles } from '@material-ui/core/styles/index';
import * as animationData from "./lotties/17896-wash-your-hands.json";

import { Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "relative",
    backgroundColor: theme.palette.common.white,
    opacity: "40",
    width: "100%",
    height: "1000px",
  },
  loadingContainer: {
    position: "absolute",
    marginTop: "10%",
    left: 0,
    right: 0,
  },
  loadingText: {
    color: theme.palette.grey["900"],
    textAlign: "center"
  },
}));

const Loading = () => {
  const classes = useStyles();
  const [lottieRef] = useLottie({
    renderer: "svg",
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  });

  return (
    <Box
      className={classes.root}
    >
      <Box data-testid="loadingPage" className={classes.loadingContainer}>
        <Typography variant={"h4"} className={classes.loadingText}>Washing our hands...</Typography>
        <Lottie lottieRef={lottieRef} height={400} width={400} />
      </Box>
    </Box>
  );
};

export default Loading;

