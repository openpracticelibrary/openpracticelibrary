import React from "react";
import Helmet from "react-helmet";
import favicon from "../assets/images/favicon.ico";
import Drawer from "./shared/Drawer";
import Footer from "./shared/BodyFooter";
import { Box } from "@mui/material";

const drawerCollapsedWidth = 72;

const Layout = ({ ogContent, children }) => (
  <>
    <Helmet>
      <link rel="icon" href={favicon} />
      <title>
        {ogContent && ogContent.title
          ? ogContent.title
          : "Open Practice Library"}
      </title>
      <meta
        property="og:title"
        content={
          ogContent && ogContent.title
            ? ogContent.title
            : "Open Practice Library"
        }
      />
      <meta
        property="og:description"
        content={
          ogContent && ogContent.desc
            ? ogContent.desc
            : "Practices that empower teams to collaborate and deliver iteratively"
        }
      />
      <meta property="og:site_name" content="Open Practice Library" />
      <meta
        property="og:image"
        content={
          ogContent && ogContent.image
            ? ogContent.image
            : "https://openpracticelibrary.github.io/opl-media/images/opl-logo.png"
        }
      />
      <meta
        property="twitter:image"
        content={
          ogContent && ogContent.image
            ? ogContent.image
            : "https://openpracticelibrary.github.io/opl-media/images/opl-logo.png"
        }
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
    <Drawer />
    <Box
      sx={{
        ml: { md: `${drawerCollapsedWidth}px` },
      }}
    >
      {children}
      <Footer />
    </Box>
  </>
);

export default Layout;
