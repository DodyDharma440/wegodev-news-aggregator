import React from "react";
import PropTypes from "prop-types";

const NavbarTop = () => {
  return (
    <div className="fixed inset-x-0 top-0 bg-white px-4 py-2">
      <h1 className="text-gray-900 text-xl font-bold">NEWS</h1>
    </div>
  );
};

NavbarTop.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default NavbarTop;
