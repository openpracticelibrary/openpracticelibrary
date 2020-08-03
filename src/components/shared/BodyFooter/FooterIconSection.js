import React from "react";
import {
  Mic,
  MailOutline,
  Github,
  YouTube,
  Instagram,
} from "@material-ui/icons";
import { Link, Grid } from "@material-ui/core";

const sections = [
  { url: "mailto:info@openpracticelibrary.com", icon: <MailOutline /> },
  {
    url: "https://www.instagram.com/openpracticelibrary/?hl=en",
    icon: <Instagram />,
  },
  { url: "https://github.com/openpracticelibrary", icon: <Github /> },
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
  return (
    <>
      <Grid container direction="row" spacing={2} alignItems="center">
        {sections.map((section, i) => (
          <Grid item key={i}>
            <Link href={section.url} target="_blank">
              {section.icon}
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
