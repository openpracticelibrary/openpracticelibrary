import React, { useRef } from "react";

import LoginButton from "../shared/Login/LoginButton";
import PageIntro from "./PageIntro";
import PageMenu from "./PageMenu";
import PageBody from "./PageBody";
import backgroundImage from "../shared/utilities/microBackgrounds";

import { Container, Box } from "@material-ui/core";
import OplBox from "../shared/components/OplBox";

const PracticePage = ({ data }) => {
  const {
    markdownRemark: {
      id: practiceId,
      fields: { slug },
      frontmatter: {
        title,
        subtitle,
        authors,
        tags,
        whatIs,
        whyDo,
        howTo,
        mediaGallery,
        resources,
      },
      rawMarkdownBody,
    },
  } = data;
  const practiceSlug = slug.split("practice/")[1];
  // Styles
  const background = backgroundImage(tags);

  // Refs
  const whatIsRef = useRef(null);
  const mediaRef = useRef(null);
  const whyDoRef = useRef(null);
  const howToRef = useRef(null);
  const resourceRef = useRef(null);

  // Child props
  const pageRefs = {
    whatIsRef,
    mediaRef,
    whyDoRef,
    howToRef,
    resourceRef,
  };

  const pageIntroData = {
    practiceId,
    title,
    subtitle,
    tags,
    authors,
    imgCount: mediaGallery ? mediaGallery.length : 0,
  };

  const pageMenuData = { practiceId };

  const pageBodyData = {
    practiceId,
    title,
    body: {
      whatIs,
      whyDo,
      howTo,
    },
    mediaGallery,
    resources,
    ama: [],
    fullText: rawMarkdownBody,
  };

  return (
    <>
      <OplBox display="flex" bg={background}>
        <LoginButton
          practiceTitle={practiceSlug ? practiceSlug.replace(/\/$/, "") : ""}
        />
        <Container maxWidth="md">
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="baseline"
          >
            <PageIntro {...pageIntroData} />
          </Box>
        </Container>
      </OplBox>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="sticky"
        top={0}
        bgcolor="white"
        borderTop="1px solid rgba(0, 0, 0, 0.12)"
        borderBottom="1px solid rgba(0, 0, 0, 0.12)"
        zIndex={1001}
        py={1}
      >
        <PageMenu {...pageMenuData} {...pageRefs} />
      </Box>

      <Container maxWidth="md">
        <PageBody {...pageBodyData} {...pageRefs} />
      </Container>
    </>
  );
};

export default PracticePage;
