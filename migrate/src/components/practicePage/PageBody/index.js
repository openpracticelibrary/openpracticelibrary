import React from "react";
import MediaGallery from "./MediaGallery";
import AskMeAnything from "./AskMeAnything";
import WhatIs from "./WhatIs";
import WhyDo from "./WhyDo";
import HowDo from "./HowDo";
import ResourcesWeLove from "./ResourcesWeLove";
import FullText from "./FullText";
import { makeStyles } from "@material-ui/core/styles/index";
import { Box } from '@material-ui/core';

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
    body: { whatIs, whyDo, howTo, fullText },
    mediaGallery,
    resources,
    ama,
    whatIsRef,
    mediaRef,
    whyDoRef,
    howToRef,
    resourceRef,
    amaRef,
    editing,
    whatIsEditor,
    whyDoEditor,
    howToEditor,
  } = props;

  if (whatIs && whyDo && howTo) {
    return (
      <>
        <Box className={classes.root}>
          <WhatIs
            title={title}
            source={whatIs}
            whatIsRef={whatIsRef}
            editing={editing}
          >
            {whatIsEditor}
          </WhatIs>
          <WhyDo
            title={title}
            source={whyDo}
            whyDoRef={whyDoRef}
            editing={editing}
          >
            {whyDoEditor}
          </WhyDo>
          <HowDo
            title={title}
            source={howTo}
            howToRef={howToRef}
            editing={editing}
          >
            {howToEditor}
          </HowDo>
          <MediaGallery
            practiceId={practiceId}
            title={title}
            mediaGallery={mediaGallery}
            mediaRef={mediaRef}
          />
          <ResourcesWeLove
            practiceId={practiceId}
            links={resources}
            resourceRef={resourceRef}
          />
          <AskMeAnything ama={ama} amaRef={amaRef} />
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
