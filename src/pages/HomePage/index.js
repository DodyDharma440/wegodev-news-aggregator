import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import CategorySlider from "components/common/category/CategorySlider";
import NewsCardSlider from "components/common/news/NewsCardSlider";
import NewsList from "components/common/news/NewsList";
import Alert from "components/common/alert/Alert";

import ListHorizontalLoading from "components/common/loading/ListHorizontal";

const HomePage = ({ categories }) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const [headlineNews, setHeadlineNews] = useState([]);
  const [news, setNews] = useState([]);

  const [currentCategory, setCurrentCategory] = useState({
    id: "technology",
    label: "Technology",
  });

  const fetchHeadlineNews = (category = "technology") => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?q=${category}&apiKey=0b1eab85c7934f29b778cb90cf9a7ff3`
      )
      .then((response) => {
        setHeadlineNews(response.data.articles);
        setLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setLoading(false);
      });
  };

  const fetchNews = (category = "technology") => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${category}&apiKey=0b1eab85c7934f29b778cb90cf9a7ff3`
      )
      .then((response) => {
        setNews(response.data.articles);
        setLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setLoading(false);
      });
  };

  const handleSetCategory = (cat) => {
    setLoading(true);
    setCurrentCategory({
      id: cat.id,
      label: cat.label,
    });
    fetchNews(cat.id);
    fetchHeadlineNews(cat.id);
  };

  useEffect(() => {
    setLoading(true);
    fetchNews();
    fetchHeadlineNews();
  }, []);

  return (
    <div id="homePage" className="py-16 px-2">
      <CategorySlider
        categories={categories}
        handleSetCategory={handleSetCategory}
        currentCategory={currentCategory.id}
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
          <NewsCardSlider title="Popular News" news={news.slice(0, 3)} />
          <NewsList
            news={news.slice(4)}
            currentCategory={currentCategory.label}
          />
        </>
      )}
    </div>
  );
};

HomePage.propTypes = {
  categories: PropTypes.array,
};

export default HomePage;
