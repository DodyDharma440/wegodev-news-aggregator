import React from "react";
import PropTypes from "prop-types";

const CategoryButton = ({ category, handleSetCategory }) => {
  return (
    <button
      onClick={() => handleSetCategory(category.id)}
      className="inline-block bg-green-400 mx-1 px-4 py-2 rounded-md focus:outline-none"
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
