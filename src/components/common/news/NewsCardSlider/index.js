import React from "react";
import PropTypes from "prop-types";

import NewsCard from "components/common/news/NewsCard";

const NewsCardSlider = ({ title, news }) => {
  return (
    <>
      <h1 className="text-4xl font-semibold mb-2 text-gray-800">{title}</h1>
      <div className="overflow-auto whitespace-nowrap pb-3">
        {news !== undefined
          ? news.map((newsItem, index) => {
              return <NewsCard key={index} newsItem={newsItem} />;
            })
          : null}
      </div>
    </>
  );
};

export default NewsCardSlider;
