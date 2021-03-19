import React, { useState, useEffect, useContext, useCallback } from "react";
import { GlobalContext } from "context/globalContext";
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
    headlineNews,
    setHeadlineNews,
    currentCategory,
    setCurrentCategory,
  } = useContext(GlobalContext);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const fetchNews = useCallback(
    ({ type, category }) => {
      setLoading(true);
      getData({
        type,
        query: category.id,
      })
        .then((response) => {
          const { articles } = response.data;

          if (type === "everything") {
            setNews(articles);
          } else if (type === "top-headlines") {
            setHeadlineNews(articles);
          }
          setLoading(false);
        })
        .catch((error) => {
          setErrorMessage(error.response.data.message);
          setLoading(false);
        });
    },
    [setNews, setHeadlineNews]
  );

  const handleCategoryClick = (category) => {
    setLoading(true);
    setCurrentCategory({
      id: category.id,
      label: category.label,
    });

    fetchNews({ type: "everything", category });
    fetchNews({ type: "top-headlines", category });
  };

  useEffect(() => {
    if (news.length === 0 || headlineNews.length === 0) {
      setLoading(true);
      setErrorMessage(undefined);
      fetchNews({ type: "everything", category: currentCategory });
      fetchNews({ type: "top-headlines", category: currentCategory });
    }
  }, [currentCategory, fetchNews, news.length, headlineNews.length]);

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
          {headlineNews.length > 0 ? (
            <NewsCardSlider title="Headline News">
              {headlineNews.map((newsItem, index) => {
                return <NewsCard key={index} newsItem={newsItem} />;
              })}
            </NewsCardSlider>
          ) : null}

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
