import React, { useContext } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { GlobalContext } from "context/Context";

import "./buttonstyle.css";

const CategoryButton = ({ children, category, handleCategoryClick }) => {
  const { currentCategory } = useContext(GlobalContext);

  const buttonActiveStyle = classnames(
    "button-category inline-block mx-1 px-6 py-2 rounded-full focus:outline-none",
    {
      "bg-myPalette-purple": currentCategory.id === category.id,
      "bg-myPalette-lightPurple": currentCategory.id !== category.id,
    }
  );

  return (
    <button
      onClick={() => handleCategoryClick(category)}
      className={buttonActiveStyle}
    >
      <span className="capitalize text-white font-bold">{children}</span>
    </button>
  );
};

CategoryButton.propTypes = {
  category: PropTypes.object.isRequired,
  handleCategoryClick: PropTypes.func.isRequired,
};

export default CategoryButton;
