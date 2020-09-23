import React from "react";
import FullText from "./FullText";
import MediaGallery from "./MediaGallery";
import Resources from "./Resources";
import { Box, Typography } from "@material-ui/core";
import HyvorTalk from "hyvor-talk-react";

const PageBody = ({
  body: { whatIs, whyDo, howTo },
  discussRef,
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
            <Typography
              data-testid="practice-section-what"
              gutterBottom
              variant="h4"
              ref={whatIsRef}
            >
              What Is {title}?
            </Typography>
            <FullText source={whatIs} />
          </>
        )}
        {whyDo && (
          <>
            <Typography
              data-testid="practice-section-why"
              gutterBottom
              ref={whyDoRef}
              variant="h4"
            >
              Why Do {title}?
            </Typography>
            <FullText source={whyDo} />
          </>
        )}
        {howTo && (
          <>
            <Typography
              data-testid="practice-section-how"
              gutterBottom
              ref={howToRef}
              variant="h4"
            >
              How to do {title}?
            </Typography>
            <FullText source={howTo} />
          </>
        )}
        {mediaGallery && (
          <>
            <Typography
              data-testid="practice-section-look"
              gutterBottom
              ref={mediaRef}
              variant="h4"
            >
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
            <Typography
              data-testid="practice-section-links"
              gutterBottom
              variant="h4"
              ref={resourceRef}
            >
              Links we love
            </Typography>
            <Resources
              practiceTitle={title}
              practiceId={practiceId}
              links={resources}
              resourceRef={resourceRef}
            />
          </>
        )}
        <Typography
          data-testid="practice-section-discuss"
          ref={discussRef}
          variant="h4"
        >
          Community Discussion
        </Typography>
        <HyvorTalk.Embed websiteId={1961} />
      </Box>
    );
  } else {
    return <FullText source={fullText} />;
  }
};
export default PageBody;
