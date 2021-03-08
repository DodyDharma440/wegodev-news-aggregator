import React from "react";
import PropTypes from "prop-types";

const CategoryCard = ({ category, handleCategoryClick }) => {
  return (
    <div
      className="bg-white h-40 rounded-3xl bg-opacity-50 flex justify-center items-center hover:bg-opacity-60"
      onClick={() => handleCategoryClick(category)}
    >
      <div>
        <div className="bg-gray-100 bg-opacity-60 p-5 mb-2 rounded-full">
          <span className="text-6xl text-myPalette-text text-opacity-95">
            {category.icon}
          </span>
        </div>
        <div className="text-center">
          <p className="text-myPalette-dark2 font-bold">{category.label}</p>
        </div>
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.object.isRequired,
  handleCategoryClick: PropTypes.func.isRequired,
};

export default CategoryCard;
