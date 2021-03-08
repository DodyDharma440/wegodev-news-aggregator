import React, { useContext } from "react";
import { GlobalContext } from "hooks/Context";
import PropTypes from "prop-types";

import NewsListItem from "components/common/news/NewsListItem";

const NewsList = ({ news, title, finalSearchValue }) => {
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

      {news.map((newsItem, index) => {
        return <NewsListItem key={index} newsItem={newsItem} />;
      })}
    </>
  );
};

NewsListItem.propTypes = {
  news: PropTypes.array,
  finalSearchValue: PropTypes.string,
};

export default NewsList;
