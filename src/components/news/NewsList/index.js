import React, { useContext } from "react";
import { GlobalContext } from "context/Context";
import PropTypes from "prop-types";

const NewsList = ({ children, title, finalSearchValue }) => {
  const { currentCategory } = useContext(GlobalContext);

  return (
    <>
      <h1 className="text-3xl capitalize font-semibold mb-2 text-gray-800">
        {title ? `${currentCategory.label} News` : null}
      </h1>

      {finalSearchValue ? (
        <h1 className="text-xl font-semibold mb-2 text-gray-800">
          <span className="text-gray-500">Search results for :</span>{" "}
          {finalSearchValue}
        </h1>
      ) : null}

      {children}
    </>
  );
};

NewsList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  title: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  finalSearchValue: PropTypes.string,
};

export default NewsList;
