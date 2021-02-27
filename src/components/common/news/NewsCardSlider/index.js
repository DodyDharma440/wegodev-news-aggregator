import React from "react";
import PropTypes from "prop-types";

import NewsCard from "components/common/news/NewsCard";

const NewsCardSlider = ({ title, news }) => {
  return news === undefined ? null : news.length > 0 ? (
    <>
      <h1 className="text-3xl font-semibold mb-2 text-gray-800">{title}</h1>
      <div className="overflow-auto whitespace-nowrap pb-3">
        {news.map((newsItem, index) => {
          return <NewsCard key={index} newsItem={newsItem} />;
        })}
      </div>
    </>
  ) : null;
};

NewsCardSlider.propTypes = {
  title: PropTypes.string.isRequired,
  news: PropTypes.array,
};

export default NewsCardSlider;
