import React from "react";
import PropTypes from "prop-types";

const CategoryCardSmall = ({ children, category, handleCategoryClick }) => {
  return (
    <div
      onClick={() => handleCategoryClick(category.id)}
      className="w-16 h-16 rounded-2xl bg-myPalette-purple bg-opacity-10 m-2 flex justify-center items-center shadow-xl"
    >
      <span className="text-myPalette-darkPurple text-3xl">{children}</span>
    </div>
  );
};

CategoryCardSmall.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  category: PropTypes.object.isRequired,
  handleCategoryClick: PropTypes.func,
};

export default CategoryCardSmall;
