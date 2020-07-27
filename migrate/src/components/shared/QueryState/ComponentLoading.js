import React from "react";
import { useLottie, Lottie } from "react-lottie-hook";
import { makeStyles } from '@material-ui/core/styles/index';
import * as animationData from "./lotties/23590-loading.json";
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  loadingContainer: {
    display: "flex",
    margin: "5%",
  },
}));

const ComponentLoading = () => {
  const classes = useStyles();
  const [lottieRef] = useLottie({
    renderer: "svg",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      progressiveLoad: false
    },
    animationData: animationData.default,
  });

  return (
    <Box data-testid="loadingComponent" className={classes.loadingContainer}>
      <Lottie lottieRef={lottieRef} height={250} width={350} />
    </Box>
  );
};

export default ComponentLoading;

