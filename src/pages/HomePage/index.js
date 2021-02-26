import React from "react";

import CategorySlider from "components/common/category/CategorySlider";
import NewsCardSlider from "components/common/news/NewsCardSlider";

const HomePage = ({ recentNews, headlineNews, categories }) => {
  return (
    <div id="homePage">
      <CategorySlider categories={categories} />
      <NewsCardSlider title="Headline News" news={headlineNews} />
      <NewsCardSlider title="Recent News" news={recentNews} />
    </div>
  );
};

export default HomePage;
