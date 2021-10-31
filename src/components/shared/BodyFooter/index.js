import React from "react";
import {
  Container,
  Box,
  Divider,
  Grid,
  Typography,
  Link,
} from "@material-ui/core";
import {
  Mic,
  MailOutline,
  GitHub,
  YouTube,
  Instagram,
} from "@material-ui/icons";
import { CCHeart } from "../../../assets/icons/index";
import Logo from "../../../components/shared/Logo";
import logoLabs from "../../../assets/images/logo-red-hat-open-innovation-labs-a-standard-rgb.png";

const BodyFooter = () => {
  return (
    <Box>
      <Divider />
      <Container maxWidth="md">
        <Box
          alignItems="center"
          component="footer"
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          my={3}
        >
          <Box
            alignItems="center"
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            marginBottom={{ xs: 2, md: 0 }}
          >
            <Logo horizontal small />
            <Typography>powered by</Typography>
            <Box marginLeft={1}>
              <img src={logoLabs} alt="Open Innovation Labs Logo" />
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Typography variant="h6">Connect with our Community:</Typography>
            <Grid container spacing={2}>
              <Grid item>
                <Link
                  href="https://podcasts.apple.com/us/podcast/open-practice-podcast/id1501715186"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Mic />
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="https://github.com/openpracticelibrary"
                  rel="noreferrer"
                  target="_blank"
                >
                  <GitHub />
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="mailto:info@openpracticelibrary.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <MailOutline />
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="https://www.instagram.com/openpracticelibrary/?hl=en"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Instagram />
                </Link>
              </Grid>           
            </Grid>
          </Box>
        </Box>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
          marginBottom={2}
        >
          <Typography align="center" gutterBottom variant="subtitle">
            Except where noted, content on this site is licensed under a{" "}
            <Link
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noopener"
            >
              <CCHeart />
              Creative Commons Attribution 4.0
            </Link>{" "}
            International license.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
export default BodyFooter;
