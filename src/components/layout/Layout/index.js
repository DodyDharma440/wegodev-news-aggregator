import React from "react";
import PropTypes from "prop-types";

import NavbarBottom from "components/layout/NavbarBottom";

const Layout = ({ children }) => {
  return (
    <main className="box-border font-dmSans bg-myPalette-background text-myPalette-text min-h-screen">
      <div id="content">{children}</div>
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
