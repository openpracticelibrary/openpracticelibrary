import React from "react";
import {
  Box,
  Container,
  Divider,
  Toolbar,
  Button,
  Hidden,
} from "@material-ui/core";
import SocialLinks from "./SocialLinks";

const sections = [
  { title: "What", ref: "whatIsRef" },
  { title: "Why", ref: "whyDoRef" },
  { title: "How", ref: "howToRef" },
  { title: "Look", ref: "mediaRef" },
  { title: "Links", ref: "resourceRef" },
  { title: "Discuss", ref: "discussRef" },
];

export default function PageMenu(props) {
  const scrollTo = (ref) => {
    props[ref].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <Box
      position="sticky"
      top={0}
      bgcolor="white"
      marginBottom={3}
      zIndex="appBar"
    >
      <Toolbar component="nav">
        <Container maxWidth="md">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Hidden xsDown>
                {sections.map((section, i) => (
                  <Button
                    key={section.title}
                    color="default"
                    disableElevation
                    onClick={() => scrollTo(section.ref)}
                    size="small"
                    variant="text"
                  >
                    {section.title}
                  </Button>
                ))}
              </Hidden>
            </Box>
            <Box>
              <SocialLinks
                coverImage={props.coverImage}
                practiceId={props.practiceId}
                upvotes={props.upvotes}
              />
            </Box>
          </Box>
        </Container>
      </Toolbar>
      <Divider />
    </Box>
  );
}
