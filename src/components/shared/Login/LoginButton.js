import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import OplButton from "../components/OplButton";

const Login = (props) => {
  const theme = useTheme();
  return (
      <OplButton
        data-testid="loginButton"
        variant="contained"
        bg={theme.palette.primary.light}
        color="primary"
        onClick={() => window.location.href = `${window.location.origin}/admin/#/collections/practice/entries/${props.practiceTitle}`}
      >
        Improve this practice!
      </OplButton>
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
