import React from "react";
import PropTypes from "prop-types";

const Content = ({ children }) => {
  return <div className="pt-12 px-2">{children}</div>;
};

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Content;
