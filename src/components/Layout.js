import React from "react";
import Helmet from "react-helmet";
import favicon from "../assets/images/favicon.ico";
import OplDrawer from "./shared/Drawer";
import OplFooter from "./shared/BodyFooter";

const Layout = ({ children }) => (
  <>
    <Helmet>
      <link rel="icon" href={favicon} />
      <title>Open Practice Library</title>
      <meta name="description" content="Practices that empower teams to collaborate and deliver iteratively" />
    </Helmet>
    <OplDrawer>
      {children}
      <OplFooter />
    </OplDrawer>
  </>
);

export default Layout;
