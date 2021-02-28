import React from "react";
import PropTypes from "prop-types";

import CategoryButton from "components/common/category/CategoryButton";

const CategorySlider = ({ categories, handleSetCategory, currentCategory }) => {
  return (
    <div className="overflow-auto whitespace-nowrap pb-3 -mx-2">
      {categories !== undefined
        ? categories.map((category, index) => {
            return (
              <CategoryButton
                key={index}
                category={category}
                handleSetCategory={handleSetCategory}
                currentCategory={currentCategory}
              />
            );
          })
        : null}
    </div>
  );
};

CategorySlider.propTypes = {
  categories: PropTypes.array,
  handleSetCategory: PropTypes.func,
};

export default CategorySlider;
