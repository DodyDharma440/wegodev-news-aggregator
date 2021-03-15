import React, { useContext } from "react";
import { GlobalContext } from "context/Context";
import PropTypes from "prop-types";

import { HiX } from "react-icons/hi";

const CategoryTiles = ({ children, handleShowHideMenu }) => {
  const { news } = useContext(GlobalContext);

  return (
    <div className="bg-myPalette-purple min-h-screen">
      <div className="pb-16 pt-2 px-2">
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
        <div className="grid grid-cols-2 gap-6">{children}</div>
      </div>
    </div>
  );
};

CategoryTiles.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  handleShowHideMenu: PropTypes.func,
};

export default CategoryTiles;
