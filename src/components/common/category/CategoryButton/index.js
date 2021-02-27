import React from "react";
import PropTypes from "prop-types";

const CategoryButton = ({ category, handleSetCategory }) => {
  return (
    <button
      onClick={() => handleSetCategory(category.id)}
      className="inline-block bg-myPalette-purple mx-1 px-6 py-2 rounded-full focus:outline-none"
    >
      <span className="capitalize text-white font-bold">{category.label}</span>
    </button>
  );
};

CategoryButton.propTypes = {
  category: PropTypes.object.isRequired,
  handleSetCategory: PropTypes.func.isRequired,
};

export default CategoryButton;
