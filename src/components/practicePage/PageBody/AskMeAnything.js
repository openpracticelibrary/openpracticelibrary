import React from "react";
import {
  Typography,
  IconButton,
  InputAdornment,
  Box,
  TextField
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles/index";
import QuestionsAndAnswers from "./QuestionsAndAnswers";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  space: {
    padding: theme.spacing(1)
  },
  textField: {
    borderRadius: "9px"
  },
  exitIcon: {
    color: theme.palette.primary.main
  },
  input: {
    "&::placeholder": {
      fontFamily: "Montserrat",
      fontWeight: "normal",
      fontSize: "1.625rem",
      color: theme.palette.primary.main,
      padding: theme.spacing(1),
      opacity: 100
    }
  }
}));

export default function AskMeAnything(props) {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.space}>
          <Typography variant={"h4"} ref={props.amaRef}>
            <b>Ask me anything</b>
          </Typography>
        </Box>
        <Box className={classes.space}>
          <Typography>
            Please send a question to the community about anything you may need
            for using this practice.
          </Typography>
        </Box>
        <Box className={classes.space}>
          <TextField
            id="ama"
            variant="outlined"
            fullWidth
            margin="normal"
            placeholder="What questions do you have?"
            InputProps={{
              classes: { input: classes.input, root: classes.textField },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <ExitToAppIcon className={classes.exitIcon} />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Box>
        <QuestionsAndAnswers ama={props.ama} />
      </Box>
    </>
  );
}
