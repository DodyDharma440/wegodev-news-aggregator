import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "hooks/Context";
import { getData } from "hooks/Axios";

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
  } = useContext(GlobalContext);

  const [headlineNews, setHeadlineNews] = useState([]);

  const fetchNews = ({ type, query }) => {
    getData({ type, query })
      .then((response) => {
        setNews(response.data.articles);
        setLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setLoading(false);
      });
  };

  const fetchHeadlineNews = ({ type, query }) => {
    getData({ type, query })
      .then((response) => {
        setHeadlineNews(response.data.articles);
        setLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetchNews({
      type: "everything",
      query: currentCategory.id,
    });
    fetchHeadlineNews({
      type: "top-headlines",
      query: currentCategory.id,
    });
  }, []);

  return (
    <div id="homePage" className="py-16 px-2">
      <CategorySlider
        fetchNews={fetchNews}
        fetchHeadlineNews={fetchHeadlineNews}
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

export default HomePage;
