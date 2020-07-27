import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles/index";
import { AmaIcon } from "../../../assets/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1)
  },
  space: {
    marginRight: theme.spacing(2),
  },
  question: {
    color: theme.palette.grey["900"],
  }
}));

export default function QuestionsAndAnswers(props) {
  const classes = useStyles();

  return (
    <>
      {props.ama.map((qAndA, i) => (
        <Grid
          container
          key={i}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          className={classes.root}
        >
          <Grid item className={classes.space}>
            <AmaIcon fill="#1975FF" height="27px" width="27px" />
          </Grid>
          <Grid item>
            <Typography variant={"subtitle1"} className={classes.question}>
              {qAndA.question}
            </Typography>
            <br/>
            <Typography variant="button">Answer</Typography>
            <Typography variant="body1">
              {qAndA.answers.map((a) => a.answer)}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </>
  );
}
