import React, { useContext } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { GlobalContext } from "hooks/Context";

import "./buttonstyle.css";

const CategoryButton = ({ category, fetchNews, fetchHeadlineNews }) => {
  const { currentCategory, setCurrentCategory, setLoading } = useContext(
    GlobalContext
  );

  const handleClickCategory = (category) => {
    setLoading(true);
    setCurrentCategory({
      id: category.id,
      label: category.label,
    });

    fetchNews({
      type: "everything",
      query: category.id,
    });

    fetchHeadlineNews({
      type: "top-headlines",
      query: category.id,
    });
  };

  const buttonActiveStyle = classnames(
    "button-category inline-block mx-1 px-6 py-2 rounded-full focus:outline-none",
    {
      "bg-myPalette-purple": currentCategory.id === category.id,
      "bg-myPalette-lightPurple": currentCategory.id !== category.id,
    }
  );

  return (
    <button
      onClick={() => handleClickCategory(category)}
      className={buttonActiveStyle}
    >
      <span className="capitalize text-white font-bold">{category.label}</span>
    </button>
  );
};

CategoryButton.propTypes = {
  category: PropTypes.object.isRequired,
  fetchNews: PropTypes.func.isRequired,
  fetchHeadlineNews: PropTypes.func.isRequired,
};

export default CategoryButton;
