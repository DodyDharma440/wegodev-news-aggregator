import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "context/globalContext";
import classnames from "classnames";
import PropTypes from "prop-types";

import { HiX } from "react-icons/hi";

const CategoryTiles = ({ children, handleShowHideMenu }) => {
  const { news } = useContext(GlobalContext);
  const [mounted, setMounted] = useState(false);

  const [transition, setTransition] = useState(true);

  const containerStyle = classnames(
    "bg-myPalette-purple fixed overflow-y-auto inset-0 z-100",
    {
      "transition-all duration-200": news.length > 0,
      "top-full": transition,
      "top-0": !transition,
    }
  );

  useEffect(() => {
    setMounted(true);
    if (mounted) {
      if (news.length > 0) {
        setTimeout(() => setTransition(false), 100);
      } else {
        setTransition(false);
      }
    }

    return () => setTransition(false);
  }, [mounted, news.length]);

  return (
    <div className={containerStyle}>
      <div className="pb-16 pt-2 px-2">
        <div className="flex mb-4">
          <h1 className="text-3xl font-semibold text-gray-100 flex-1 ">
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
