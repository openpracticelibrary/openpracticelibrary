import React from "react";
import OplDrawer from "./shared/Drawer";
import OplFooter from "./shared/BodyFooter";

const Layout = ({ children }) => (
  <OplDrawer>
    {children}
    <OplFooter />
  </OplDrawer>
);

export default Layout;
