import React from "react";
import PropTypes from "prop-types";

import NewsListItem from "components/common/news/NewsListItem";

const NewsList = ({ news, currentCategory }) => {
  return (
    <>
      <h1 className="text-3xl capitalize font-semibold mb-2 text-gray-800">
        {`${currentCategory} News`}
      </h1>
      {news.map((newsItem, index) => {
        return <NewsListItem key={index} newsItem={newsItem} />;
      })}
    </>
  );
};

NewsListItem.propTypes = {
  news: PropTypes.array,
  currentCategory: PropTypes.string,
};

export default NewsList;
