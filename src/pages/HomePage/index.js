import React, { useState, useEffect, useContext, useCallback } from "react";
import { GlobalContext } from "hooks/Context";
import { getData } from "hooks/Axios";

import Header from "components/common/head/Header";
import CategorySlider from "components/common/category/CategorySlider";
import NewsCardSlider from "components/common/news/NewsCardSlider";
import NewsList from "components/common/news/NewsList";
import Alert from "components/common/alert/Alert";

import ListHorizontalLoading from "components/common/loading/ListHorizontal";

const HomePage = () => {
  const {
    news,
    setNews,
    loading,
    setLoading,
    errorMessage,
    setErrorMessage,
    currentCategory,
    setCurrentCategory,
  } = useContext(GlobalContext);

  const [headlineNews, setHeadlineNews] = useState([]);

  const fetchNews = useCallback(
    ({ type, query }) => {
      getData({ type, query })
        .then((response) => {
          setNews(response.data.articles);
          setLoading(false);
        })
        .catch((error) => {
          setErrorMessage(error.message);
          setLoading(false);
        });
    },
    [setErrorMessage, setLoading, setNews]
  );

  const fetchHeadlineNews = useCallback(
    ({ type, query }) => {
      getData({ type, query })
        .then((response) => {
          setHeadlineNews(response.data.articles);
          setLoading(false);
        })
        .catch((error) => {
          setErrorMessage(error.message);
          setLoading(false);
        });
    },
    [setErrorMessage, setLoading, setHeadlineNews]
  );

  const handleCategoryClick = (category) => {
    setLoading(true);
    setCurrentCategory({
      id: category.id,
      label: category.label,
    });

    fetchNews({
      type: "everything",
      query: category.id,
    });

    fetchHeadlineNews({
      type: "top-headlines",
      query: category.id,
    });
  };

  useEffect(() => {
    setLoading(true);
    setErrorMessage(undefined);
    fetchNews({
      type: "everything",
      query: currentCategory.id,
    });
    fetchHeadlineNews({
      type: "top-headlines",
      query: currentCategory.id,
    });
  }, [currentCategory, fetchHeadlineNews, fetchNews, setLoading]);

  return (
    <div id="homePage" className="py-16 px-2">
      <Header />
      <CategorySlider handleCategoryClick={handleCategoryClick} />
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
            title
            news={news.slice(4)}
            currentCategory={currentCategory.label}
          />
        </>
      )}
    </div>
  );
};

export default HomePage;
