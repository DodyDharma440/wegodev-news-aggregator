import React, { useState, useEffect, useContext, useCallback } from "react";
import { GlobalContext } from "context/Context";
import { getData } from "api/getData";

import Header from "components/head/Header";
import CategorySlider from "components/category/CategorySlider";
import CategoryButton from "components/category/CategoryButton";
import NewsCardSlider from "components/news/NewsCardSlider";
import NewsCard from "components/news/NewsCard";
import NewsList from "components/news/NewsList";
import NewsListItem from "components/news/NewsListItem";
import Alert from "components/alert/Alert";
import ListHorizontalLoading from "components/loading/ListHorizontal";

const HomePage = () => {
  const {
    categories,
    news,
    setNews,
    currentCategory,
    setCurrentCategory,
  } = useContext(GlobalContext);

  const [headlineNews, setHeadlineNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);

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
  }, [
    currentCategory,
    fetchHeadlineNews,
    fetchNews,
    setLoading,
    setErrorMessage,
  ]);

  return (
    <div id="homePage" className="py-16 px-2">
      <Header />
      <CategorySlider>
        {categories !== undefined
          ? categories.map((category, index) => {
              return (
                <CategoryButton
                  key={index}
                  category={category}
                  handleCategoryClick={handleCategoryClick}
                >
                  {category.label}
                </CategoryButton>
              );
            })
          : null}
      </CategorySlider>
      {loading ? (
        <>
          <ListHorizontalLoading />
          <ListHorizontalLoading />
        </>
      ) : errorMessage ? (
        <Alert variant="danger">{errorMessage}</Alert>
      ) : (
        <>
          <NewsCardSlider title="Headline News">
            {headlineNews.map((newsItem, index) => {
              return <NewsCard key={index} newsItem={newsItem} />;
            })}
          </NewsCardSlider>
          <NewsCardSlider title="Popular News">
            {news.slice(0, 3).map((newsItem, index) => {
              return <NewsCard key={index} newsItem={newsItem} />;
            })}
          </NewsCardSlider>
          <NewsList title>
            {news.slice(4).map((newsItem, index) => {
              return <NewsListItem key={index} newsItem={newsItem} />;
            })}
          </NewsList>
        </>
      )}
    </div>
  );
};

export default HomePage;
