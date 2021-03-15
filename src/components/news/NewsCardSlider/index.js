import React from "react";
import PropTypes from "prop-types";

const NewsCardSlider = ({ children, title }) => {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-2 text-gray-800">{title}</h1>
      <div className="overflow-auto whitespace-nowrap pb-8 -mx-2">
        {children}
      </div>
    </>
  );
};

NewsCardSlider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  title: PropTypes.string.isRequired,
};

export default NewsCardSlider;
