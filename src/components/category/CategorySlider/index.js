import React from "react";
import PropTypes from "prop-types";

const CategorySlider = ({ children }) => {
  return (
    <div className="overflow-auto whitespace-nowrap pb-3 -mx-2">{children}</div>
  );
};

CategorySlider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default CategorySlider;
