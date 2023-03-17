import React from "react";
import { Link } from "gatsby";
import { Box, Grid, Typography } from "@mui/material";
import FriendlyIcon from "../../assets/images/astronaut-friends.svg";
import InspiringIcon from "../../assets/images/astronaut-flag.svg";
import TrustworthyIcon from "../../assets/images/astronaut-map.svg";
import ContentCircle from "./ContentCircle";

const HistoryValues = () => (
  <Box my={4}>
    <Typography
      component="h3"
      variant="h4"
      color="primary"
      data-testid="historyValuesHeader"
      gutterBottom
    >
      Our history & values
    </Typography>
    <Typography gutterBottom>
      In 2016,{" "}
      <Link
        href="https://www.redhat.com/en/services/consulting/open-innovation-labs"
        target="_blank"
        rel="noopener"
      >
        Red Hat Open Innovation Labs
      </Link>{" "}
      saw an opportunity to document the open practices and principles they used
      during customer engagements, thus was born the Open Practice Library. That
      vision turned into a website of DevOps and product development practices
      for running workshops and learning about the discovery and delivery of
      software.
    </Typography>
    <Box my={4}>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <ContentCircle size="18rem">
            <img src={FriendlyIcon} alt={"Friendly Icon"} />
            <Typography variant="h5" component="h4" color="primary">
              Friendly
            </Typography>
            <Typography component="h6" variant="subtitle2">
              We are here to be friends with and make connections for the Open
              Practice Library community.
            </Typography>
          </ContentCircle>
        </Grid>
        <Grid item>
          <ContentCircle size="18rem">
            <img src={TrustworthyIcon} alt={"Trustworthy Icon"} />
            <Typography variant="h5" component="h4" color="primary">
              Trustworthy
            </Typography>
            <Typography component="h6" variant="subtitle2">
              We strive to provide expertise and advice that will seamlessly fit
              into our users' work life.
            </Typography>
          </ContentCircle>
        </Grid>
        <Grid item>
          <ContentCircle size="18rem">
            <img src={InspiringIcon} alt={"Inspiring Icon"} />
            <Typography variant="h5" component="h4" color="primary">
              Inspiring
            </Typography>
            <Typography component="h6" variant="subtitle2">
              We will venture into the unknown and share experiments that will
              drive innovation of the library.
            </Typography>
          </ContentCircle>
        </Grid>
      </Grid>
    </Box>
    <Typography>
      Fast forward through a few iterations and to the present day, the library
      has grown quite a bit in its strategy and approach to include the above
      core values. The product vision has evolved to adopt a value proposition
      with inclusion for a broader cross-functional community.
    </Typography>
  </Box>
);

export default HistoryValues;
