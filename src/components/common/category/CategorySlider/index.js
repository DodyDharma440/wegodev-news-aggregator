import React, { useContext } from "react";
import PropTypes from "prop-types";
import { GlobalContext } from "hooks/Context";

import CategoryButton from "components/common/category/CategoryButton";

const CategorySlider = ({ fetchNews, fetchHeadlineNews }) => {
  const { categories } = useContext(GlobalContext);

  return (
    <div className="overflow-auto whitespace-nowrap pb-3 -mx-2">
      {categories !== undefined
        ? categories.map((category, index) => {
            return (
              <CategoryButton
                key={index}
                category={category}
                fetchNews={fetchNews}
                fetchHeadlineNews={fetchHeadlineNews}
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
