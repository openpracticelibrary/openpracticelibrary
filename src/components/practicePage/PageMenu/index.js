import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import SocialLinks from "./SocialLinks";
import PropTypes from "prop-types";
import { Toolbar, Container, Grid, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: theme.spacing(2, 0),
  },
  wrapBox: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    textAlign: "center",
  },
  menuLinks: {
    maxWidth: "700px",
  },
  pageNavButton: {
    borderRadius: "16.5px",
    "&:focus": {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

const sections = [
  {title: "What", ref: "whatIsRef"},
  {title: "Why", ref: "whyDoRef"},
  {title: "How", ref: "howToRef"},
  {title: "Look", ref: "mediaRef"},
  {title: "Links", ref: "resourceRef"},
  {title: "AMA", ref: "amaRef"},
];

export default function PageMenu(props) {
  const classes = useStyles();

  const handleClick = (ref) => {
    props[ref].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <Toolbar
      component="nav"
      variant="dense"
      className={classes.root}
    >
      <Grid
        container
        direction="row"
        justify="center"
      >
        <Grid item xs={false} md={1} xl={2}></Grid>
        <Grid item xs={8} md={6} xl={5}>
          <Container maxWidth="md">
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="flex-start"
              spacing={1}
            >
              {sections.map((section, i) => (
                <Grid item key={i}>
                  <Button
                    onClick={() => handleClick(section.ref)}
                    className={classes.pageNavButton}
                  >
                    <Typography
                      variant="overline"
                    >
                      {section.title}
                    </Typography>
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Grid>
        <Grid item xs={4}>
          <SocialLinks
            practiceId={props.practiceId}
            upvotes={props.upvotes}
            coverImage={props.coverImage}
          />
        </Grid>
      </Grid>
    </Toolbar>
  );
}

PageMenu.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
