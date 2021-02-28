import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./buttonstyle.css";

const CategoryButton = ({ category, handleSetCategory, currentCategory }) => {
  const buttonActiveStyle = classnames(
    "button-category inline-block mx-1 px-6 py-2 rounded-full focus:outline-none",
    {
      "bg-myPalette-purple": currentCategory === category.id,
      "bg-myPalette-lightPurple": currentCategory !== category.id,
    }
  );
  return (
    <button
      onClick={() => handleSetCategory(category)}
      className={buttonActiveStyle}
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
