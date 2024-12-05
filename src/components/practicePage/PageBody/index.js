import React from "react";
import FullText from "./FullText";
import MediaGallery from "./MediaGallery";
import Resources from "./Resources";
import { Box, Typography } from "@mui/material";
import { GithubSelector } from '@charkour/react-reactions';

const PageBody = ({
  body: { whatIs, whyDo, howTo },
  fullText,
  howToRef,
  mediaGallery,
  mediaRef,
  practiceId,
  resourceRef,
  resources,
  title,
  whatIsRef,
  whyDoRef,
}) => {
  if (whatIs || whyDo || howTo) {
    return (
      <Box>
        {whatIs && (
          <>
            <Typography gutterBottom variant="h4" ref={whatIsRef}>
              What Is {title}?
            </Typography>
            <FullText source={whatIs} />
          </>
        )}
        {whyDo && (
          <>
            <Typography gutterBottom ref={whyDoRef} variant="h4">
              Why Do {title}?
            </Typography>
            <FullText source={whyDo} />
          </>
        )}
        {howTo && (
          <>
            <Typography gutterBottom ref={howToRef} variant="h4">
              How to do {title}?
            </Typography>
            <FullText source={howTo} />
          </>
        )}
        {mediaGallery && (
          <>
            <Typography gutterBottom ref={mediaRef} variant="h4">
              Look at {title}
            </Typography>
            <MediaGallery
              practiceId={practiceId}
              title={title}
              mediaGallery={mediaGallery}
              mediaRef={mediaRef}
            />
          </>
        )}

        {resources && (
          <>
            <Typography gutterBottom variant="h4" ref={resourceRef}>
              Links we love
            </Typography>
            <Resources
              practiceTitle={title}
              practiceId={practiceId}
              links={resources}
              resourceRef={resourceRef}
            />
            <Typography gutterBottom variant="h6" ref={resourceRef}>
              Feedback is welcome!
            </Typography>
            <Typography align="center" gutterBottom variant="subtitle1">
                <GithubSelector />
            </Typography>
          </>
        )}
      </Box>
    );
  } else {
    return <FullText source={fullText} />;
  }
};
export default PageBody;
