import React from "react";
import PropTypes from "prop-types";

import CategoryButton from "components/common/category/CategoryButton";

const CategorySlider = ({ categories }) => {
  return (
    <div className="overflow-auto whitespace-nowrap pb-3">
      {categories !== undefined
        ? categories.map((category, index) => {
            return <CategoryButton key={index} category={category} />;
          })
        : null}
    </div>
  );
};

CategorySlider.propTypes = {
  categories: PropTypes.array,
};

export default CategorySlider;
