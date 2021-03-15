import React from "react";
import PropTypes from "prop-types";

const CategorySlider = ({ children }) => {
  return (
    <div className="overflow-auto whitespace-nowrap pb-3 -mx-2">{children}</div>
  );
};

CategorySlider.propTypes = {
  categories: PropTypes.array,
};

export default CategorySlider;