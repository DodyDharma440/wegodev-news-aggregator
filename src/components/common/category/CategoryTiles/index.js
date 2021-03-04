import React, { useContext } from "react";
import { GlobalContext } from "hooks/Context";
import PropTypes from "prop-types";

import CategoryCard from "components/common/category/CategoryCard";

import { HiX } from "react-icons/hi";

const CategoryTiles = ({ handleCategoryClick, handleShowHideMenu }) => {
  const { categories, news } = useContext(GlobalContext);

  return (
    <div className="bg-myPalette-purple min-h-screen">
      <div className="py-16 px-2">
        <div className="flex mb-4">
          <h1 className="text-3xl font-semibold text-gray-100 flex-1">
            Select Category
          </h1>
          {news.length > 0 ? (
            <button
              onClick={() => handleShowHideMenu()}
              className="bg-transparent focus:outline-none mr-2"
            >
              <HiX className="text-4xl text-white" />
            </button>
          ) : null}
        </div>
        <div className="grid grid-cols-2 gap-6">
          {categories.map((category, index) => {
            return (
              <div key={index} className="col-span-1">
                <CategoryCard
                  category={category}
                  handleCategoryClick={handleCategoryClick}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

CategoryTiles.propTypes = {
  handleCategoryClick: PropTypes.func.isRequired,
  handleShowHideMenu: PropTypes.func,
};

export default CategoryTiles;
