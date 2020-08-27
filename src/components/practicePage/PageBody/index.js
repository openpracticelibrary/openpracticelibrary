import React from "react";
import MediaGallery from "./MediaGallery";
import WhatIs from "./WhatIs";
import WhyDo from "./WhyDo";
import HowDo from "./HowDo";
import ResourcesWeLove from "./ResourcesWeLove";
import FullText from "./FullText";
import { makeStyles } from "@material-ui/core/styles/index";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6, 0),
  },
}));

export default function PageBody(props) {
  const classes = useStyles();

  const {
    practiceId,
    title,
    body: { whatIs, whyDo, howTo },
    fullText,
    mediaGallery,
    resources,
    whatIsRef,
    mediaRef,
    whyDoRef,
    howToRef,
    resourceRef,
  } = props;

  if (whatIs || whyDo || howTo) {
    return (
      <>
        <Box className={classes.root}>
          {whatIs && (
            <WhatIs title={title} source={whatIs} whatIsRef={whatIsRef} />
          )}
          {whyDo && <WhyDo title={title} source={whyDo} whyDoRef={whyDoRef} />}
          {howTo && <HowDo title={title} source={howTo} howToRef={howToRef} />}
          {mediaGallery && (
            <MediaGallery
              practiceId={practiceId}
              title={title}
              mediaGallery={mediaGallery}
              mediaRef={mediaRef}
            />
          )}
          {resources && (
            <ResourcesWeLove
              practiceTitle={title}
              practiceId={practiceId}
              links={resources}
              resourceRef={resourceRef}
            />
          )}
        </Box>
      </>
    );
  } else {
    return (
      <Box className={classes.root}>
        <FullText source={fullText} />
      </Box>
    );
  }
}
