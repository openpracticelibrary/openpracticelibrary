import React from "react";
import { Box, Button } from "@mui/material";

const Login = (props) => {
  return (
    <Button
      data-testid="loginButton"
      variant="contained"
      size="small"
      onClick={() =>
        (window.location.href = `${window.location.origin}/admin/#/collections/practice/entries/${props.practiceTitle}`)
      }
    >
      Improve This Practice!
    </Button>
  );
};

const LoginButton = (props) => (
  <Box
    display={{ xs: "none", md: "flex" }}
    position="absolute"
    top="1rem"
    right="1rem"
  >
    <Login {...props} />
  </Box>
);

export default LoginButton;
