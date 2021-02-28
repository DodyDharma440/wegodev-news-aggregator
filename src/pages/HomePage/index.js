import React from "react";
import PropTypes from "prop-types";

import CategorySlider from "components/common/category/CategorySlider";
import NewsCardSlider from "components/common/news/NewsCardSlider";
import Alert from "components/common/alert/Alert";

import ListHorizontalLoading from "components/common/loading/ListHorizontal";

const HomePage = ({
  popularNews,
  headlineNews,
  categories,
  handleSetCategory,
  loading,
  errorMessage,
}) => {
  return (
    <div id="homePage">
      <CategorySlider
        categories={categories}
        handleSetCategory={handleSetCategory}
      />
      {loading ? (
        <>
          <ListHorizontalLoading />
          <ListHorizontalLoading />
        </>
      ) : errorMessage ? (
        <Alert variant="danger">{errorMessage}</Alert>
      ) : (
        <>
          <NewsCardSlider title="Headline News" news={headlineNews} />
          <NewsCardSlider title="Popular News" news={popularNews} />
        </>
      )}
    </div>
  );
};

HomePage.propTypes = {
  popularNews: PropTypes.array,
  headlineNews: PropTypes.array,
  categories: PropTypes.array,
  handleSetCategory: PropTypes.func,
  loading: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default HomePage;
