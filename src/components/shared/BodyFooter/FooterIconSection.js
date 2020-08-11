import React from "react";
import {
  Mic,
  MailOutline,
  GitHub,
  YouTube,
  Instagram,
} from "@material-ui/icons";
import { Grid } from "@material-ui/core";

const sections = [
  { url: "mailto:info@openpracticelibrary.com", icon: <MailOutline /> },
  {
    url: "https://www.instagram.com/openpracticelibrary/?hl=en",
    icon: <Instagram />,
  },
  { url: "https://github.com/openpracticelibrary", icon: <GitHub /> },
  {
    url:
      "https://podcasts.apple.com/us/podcast/open-practice-podcast/id1501715186",
    icon: <Mic />,
  },
  {
    url:
      "https://www.youtube.com/channel/UCBGbB7xVsmf-yQ8NXn7TOVg?view_as=subscriber",
    icon: <YouTube />,
  },
];

export default function FooterIconSection(props) {
  console.log(sections);
  return (
    <>
      <Grid container direction="row" spacing={2} alignItems="center">
        {sections.map((section, i) => (
          <Grid item key={i}>
            <a href={section.url} target="_blank" rel="noreferrer">
              {section.icon}
            </a>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
