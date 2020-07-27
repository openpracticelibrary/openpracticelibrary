import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Box, Dialog, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import OplButton from "../components/OplButton";

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  container: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    borderRadius: "17px",
    borderWidth: "3px",
    borderColor: theme.palette.primary.main,
    borderStyle: "solid",
    display: "flex",
    textAlign: "center",
    padding: theme.spacing(3),
  },
  loginButton: {
    borderRadius: "32px",
    width: "7rem",
    backgroundColor: "#dff1ff",
    padding: theme.spacing(2),
    borderColor: theme.palette.primary.main,
    borderWidth: "1px",
    borderStyle: "solid",
  },
  buttonText: {
    fontWeight: "500",
    color: theme.palette.grey["900"],
  },
  loginDrawerClose: {
    margin: theme.spacing(2),
    borderRadius: "17px",
  },
  loginText: {
    margin: theme.spacing(1),
  },
  formField: {
    margin: theme.spacing(1),
  },
  submitButton: {
    margin: theme.spacing(1),
    borderRadius: "32px",
    borderStyle: "solid",
    borderColor: theme.palette.primary.main,
    borderWidth: "2px",
  },
  btnText: {
    padding: theme.spacing(1),
    color: theme.palette.grey["900"],
  },
  arrowForward: {
    top: ".25em",
    position: "relative",
    color: theme.palette.primary.main,
  },
}));

const Login = (props) => {
  const [anchorEl, setAnchorEl] = React.useState();
  const theme = useTheme();
  const loggedIn = React.useContext(LoginContext);
  const uRef = React.useRef();
  const pwdRef = React.useRef();
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleLogin = async (e) => {
    e.preventDefault();
      handleClose();
      props.navigate(props.redirect);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  return (
    <>
      <OplButton
        data-testid="loginButton"
        variant="contained"
        aria-describedby={id}
        bg={theme.palette.primary.light}
        onClick={ loggedIn ? handleLogout : handleClick }
      >
        { loggedIn ? "Logout" : "Login" }
      </OplButton>
      <Dialog
        maxWidth="md"
        open={open}
        onClose={handleClose}
        PaperProps={{
          className: classes.drawerPaper,
        }}
      >
        <DialogTitle data-testid="loginForm">
          Credentials Please?
        </DialogTitle>
        <DialogContent className={classes.container}>
          <form
            className={classes.loginForm}
            autoComplete="off"
            onSubmit={handleLogin}
          >
            <Box>
              <TextField
                required
                fullWidth
                id="username"
                inputRef={uRef}
                className={classes.formField}
                label="Username/Email"
                variant="outlined"
              />
            </Box>
            <Box>
              <TextField
                required
                fullWidth
                id="password"
                inputRef={pwdRef}
                className={classes.formField}
                label="Password"
                type="password"
                variant="outlined"
              />
            </Box>
            <OplButton
              type="submit"
              variant="contained"
              bg={theme.palette.primary.light}
            >
              Log me in <ArrowForwardIcon color="primary" />
            </OplButton>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

const LoginButton = (props) => (
  <Box
    display={{ xs: "none", md: "flex" }}
    position="absolute"
    top={0}
    right={0}
    p={3}
  >
    <Login {...props} />
  </Box>
);

export default LoginButton;
