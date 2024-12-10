import React, { useRef } from "react";
import LoginButton from "../shared/Login/LoginButton";
import PageIntro from "./PageIntro";
import PageMenu from "./PageMenu";
import PageBody from "./PageBody";
import gradientSelect from "../shared/utilities/gradientSelect";
import HeroColor from "../../components/shared/HeroColor";
import { Container } from "@mui/material";

const PracticePage = ({ data, preview }) => {
  const {
    markdownRemark: {
      id: practiceId,
      fields: { slug },
      frontmatter: {
        title,
        subtitle,
        authors,
        tags,
        mobiusTag,
        whatIs,
        whyDo,
        howTo,
        mediaGallery,
        resources,
        date,
      },
      rawMarkdownBody,
    },
  } = data;
  const practiceSlug = slug.split("practice/")[1];

  let allTags = [];
  if (mobiusTag) {
    allTags = [...allTags, mobiusTag];
  }
  if (tags) {
    allTags = [...allTags, ...tags];
  }

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
    allTags,
    authors,
    date,
    imgCount: mediaGallery ? mediaGallery.length : 0,
    preview,
    mobiusTag,
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
    fullText: rawMarkdownBody,
  };

  return <>
    <HeroColor
      type="gradient"
      gradient={gradientSelect(allTags)}
      height="30vh"
    >
      {!preview && (
        <LoginButton
          practiceTitle={practiceSlug ? practiceSlug.replace(/\/$/, "") : ""}
        />
      )}
      <PageIntro {...pageIntroData} />
    </HeroColor>

    {!preview && <PageMenu {...pageMenuData} {...pageRefs} />}
    <Container maxWidth="md">
      <PageBody {...pageBodyData} {...pageRefs} />
    </Container>
  </>;
};

export default PracticePage;
