import React from "react";
import { useLottie, Lottie } from "react-lottie-hook";
import { makeStyles } from '@material-ui/core/styles/index';
import * as animationData from "./lotties/3227-error-404-facebook-style.json";
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  errorContainer: {
    display: "flex",
    margin: "5%",
  },
}));

const ComponentLoading = (props) => {
  const classes = useStyles();
  const [lottieRef] = useLottie({
    renderer: "svg",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      progressiveLoad: false
    },
    animationData: animationData.default,
  });

  console.error(props.err);

  return (
    <Box data-testid="errorComponent" className={classes.errorContainer}>
      <Lottie lottieRef={lottieRef} height={250} width={350} />
    </Box>
  );
};

export default ComponentLoading;

