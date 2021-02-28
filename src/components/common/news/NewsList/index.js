import React from "react";

import NewsListItem from "components/common/news/NewsListItem";

const NewsList = ({ news, currentCategory }) => {
  return (
    <div>
      <h1 className="text-3xl capitalize font-semibold mb-2 text-gray-800">
        {currentCategory} News
      </h1>
      {news.map((newsItem, index) => {
        return <NewsListItem key={index} newsItem={newsItem} />;
      })}
    </div>
  );
};

export default NewsList;
