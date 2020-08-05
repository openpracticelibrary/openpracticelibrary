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
    editing,
    whatIsEditor,
    whyDoEditor,
    howToEditor,
  } = props;

  if (whatIs || whyDo || howTo) {
    return (
      <>
        <Box className={classes.root}>
          {whatIs && (
          <WhatIs
            title={title}
            source={whatIs}
            whatIsRef={whatIsRef}
            editing={editing}
          >
            {whatIsEditor}
            </WhatIs>
          )}
          {whyDo && (
          <WhyDo
            title={title}
            source={whyDo}
            whyDoRef={whyDoRef}
            editing={editing}
          >
            {whyDoEditor}
            </WhyDo>
          )}
          {howTo && (
          <HowDo
            title={title}
            source={howTo}
            howToRef={howToRef}
            editing={editing}
          >
            {howToEditor}
            </HowDo>
          )}
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
