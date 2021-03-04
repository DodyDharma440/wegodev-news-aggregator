import React from "react";
import PropTypes from "prop-types";

import NavbarTop from "components/common/layout/navbar/NavbarTop";
import NavbarBottom from "components/common/layout/navbar/NavbarBottom";
import Content from "components/common/layout/content";

const Layout = ({ children }) => {
  return (
    <main className="box-border font-dmSans bg-myPalette-background text-myPalette-text min-h-screen">
      <NavbarTop />
      <Content>{children}</Content>
      <NavbarBottom />
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Layout;