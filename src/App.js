import React, { useState, useEffect } from "react";
import axios from "axios";

import Routes from "./routes/Routes";

import HomePage from "pages/HomePage";

const categories = [
  { label: "Technology", id: "technology" },
  { label: "Apple", id: "apple" },
  { label: "Microsoft", id: "microsoft" },
  { label: "Game", id: "game" },
  { label: "Google", id: "google" },
  { label: "Android", id: "android" },
  { label: "Tesla", id: "tesla" },
  { label: "Netflix", id: "netflix" },
];

const App = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [headlineNews, setHeadlineNews] = useState([]);
  const [popularNews, setPopularNews] = useState([]);

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

  const fetchPopularNews = (category = "technology") => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${category}&apiKey=0b1eab85c7934f29b778cb90cf9a7ff3`
      )
      .then((response) => {
        setPopularNews(response.data.articles);
        setLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setLoading(false);
      });
  };

  const handleSetCategory = (cat) => {
    setLoading(true);
    fetchPopularNews(cat);
    fetchHeadlineNews(cat);
  };

  useEffect(() => {
    setLoading(true);
    fetchPopularNews();
    fetchHeadlineNews();
  }, []);

  const routes = [
    {
      path: "/",
      exact: true,
      navbar: "home",
      components: (
        <HomePage
          headlineNews={headlineNews}
          popularNews={popularNews.slice(0, 3)}
          categories={categories}
          handleSetCategory={handleSetCategory}
          loading={loading}
          errorMessage={errorMessage}
        />
      ),
    },
    {
      path: "/category",
      navbar: "category",
      components: <HomePage />,
    },
    {
      path: "/explore",
      navbar: "explore",
      components: <HomePage />,
    },
    {
      path: "/bookmarks",
      navbar: "bookmarks",
      components: <HomePage />,
    },
  ];

  return <Routes routes={routes} />;
};

export default App;
