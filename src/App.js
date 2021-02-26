import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import HomePage from "pages/HomePage";
import Layout from "components/common/layout";

const categories = [
  { label: "Technology" },
  { label: "Bussines" },
  { label: "Entertaiment" },
  { label: "General" },
  { label: "Health" },
  { label: "Science" },
  { label: "Sports" },
];

const App = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [headlineNews, setHeadlineNews] = useState([]);
  const [recentNews, setRecentNews] = useState([]);

  const fetchHeadlineNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?q=technology&apiKey=0b1eab85c7934f29b778cb90cf9a7ff3"
      )
      .then((response) => {
        setHeadlineNews(response.data.articles);
        setLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const fetchDefaultNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=technology&apiKey=0b1eab85c7934f29b778cb90cf9a7ff3"
      )
      .then((response) => {
        setRecentNews(response.data.articles);
        setLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetchHeadlineNews();
    fetchDefaultNews();
  }, []);

  const routes = [
    {
      path: "/",
      exact: true,
      navbar: "home",
      components: (
        <HomePage
          headlineNews={headlineNews}
          recentNews={recentNews.slice(0, 5)}
          categories={categories}
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

  return (
    <Router>
      <Layout>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route key={index} exact={route.exact} path={route.path}>
                {route.components}
              </Route>
            );
          })}
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
