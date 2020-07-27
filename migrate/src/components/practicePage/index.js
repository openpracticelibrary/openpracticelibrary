import React, { useRef, useState } from "react";

import LoginButton from "../shared/Login/LoginButton";
import PageIntro from "./PageIntro";
import PageMenu from "./PageMenu";
import PageBody from "./PageBody";
import backgroundImage from "../shared/utilities/microBackgrounds";

import { Container, Box } from '@material-ui/core';
import OplBox from "../shared/components/OplBox";

const PracticePage = ({ data, updatePractice, loggedIn, navigate }) => {
  const {
    id: practiceId,
    title,
    subtitle,
    authors,
    body,
    tags,
    upvotes,
    coverImage,
    mediaGallery,
    ama,
    resources,
    createdAt,
    updatedAt,
  } = data;

  // Styles
  const background = backgroundImage(tags);

  // Refs
  const whatIsRef = useRef(null);
  const mediaRef = useRef(null);
  const whyDoRef = useRef(null);
  const howToRef = useRef(null);
  const resourceRef = useRef(null);
  const amaRef = useRef(null);

  // Child props
  const pageRefs = {
    whatIsRef,
    mediaRef,
    whyDoRef,
    howToRef,
    resourceRef,
    amaRef
  };

  const pageIntroData = {
    practiceId,
    title,
    subtitle,
    tags,
    authors,
    createdAt,
    updatedAt,
    upvotes,
    imgCount: mediaGallery.length,
    questions: ama.length
  };

  const pageMenuData = { practiceId, upvotes, coverImage }

  const pageBodyData = {
    practiceId,
    title,
    body,
    mediaGallery,
    ama,
    resources
  };

  return (
    <>
      <OplBox
        display="flex"
        bg={background}
      >
        <LoginButton
          navigate={navigate}
          redirect={`/practice/${data.slug}`}
        />
        <Container maxWidth="md">
          <Box display="flex" flexDirection="row" justifyContent="center" alignItems="baseline">
            <LoggedInEditing />
            <PageIntro
              editing={editing}
              {...pageIntroData}
            />
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
        <PageMenu {...pageMenuData} { ...pageRefs } />
      </Box>

      <Container maxWidth="md">
        <PageBody
          editing={editing}
          {...pageBodyData}
          {...pageRefs}
        />
      </Container>
    </>
  );
}

export default PracticePage;
