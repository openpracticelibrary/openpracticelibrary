import React from "react";
import Helmet from "react-helmet";
import favicon from "../assets/images/favicon.ico";
import OplDrawer from "./shared/Drawer";
import OplFooter from "./shared/BodyFooter";

const Layout = ({ ogContent, children }) => (
  <>
    <Helmet>
      <link rel="icon" href={favicon} />
      <title>{ ogContent && ogContent.title ? ogContent.title : "Open Practice Library"}</title>
      <meta property="og:title" content={ ogContent && ogContent.title ? ogContent.title : "Open Practice Library" } />
      <meta property="og:description" content={ ogContent && ogContent.desc ? ogContent.desc : "Practices that empower teams to collaborate and deliver iteratively" } />
      <meta property="og:site_name" content="Open Practice Library" />
      { ogContent && ogContent.image ?
          <meta property="og:image" content={ogContent.image} />
          :
          <meta property="og:image" content="https://d33wubrfki0l68.cloudfront.net/bf16c1ca0eaa00f72b5f366cc4795bc3592f706f/59282/images/logo.svg" />
      }
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
    <OplDrawer>
      {children}
      <OplFooter />
    </OplDrawer>
  </>
);

export default Layout;
