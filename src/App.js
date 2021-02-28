import React from "react";

import Routes from "./routes/Routes";

import HomePage from "pages/HomePage";

const categories = [
  {
    id: "technology",
    label: "Technology",
  },
  {
    id: "apple",
    label: "Apple",
  },
  {
    id: "microsoft",
    label: "Microsoft",
  },
  {
    id: "game",
    label: "Game",
  },
  {
    id: "programming",
    label: "Programming",
  },
  {
    id: "google",
    label: "Google",
  },
  {
    id: "intel",
    label: "Intel",
  },
  {
    id: "android",
    label: "Android",
  },
  {
    id: "tesla",
    label: "Tesla",
  },
  {
    id: "playstation",
    label: "Play Station",
  },
  {
    id: "nvidia",
    label: "Nvidia",
  },
];

const App = () => {
  const routes = [
    {
      path: "/",
      exact: true,
      components: <HomePage categories={categories} />,
    },
    {
      path: "/category",
      components: <HomePage />,
    },
    {
      path: "/explore",
      components: <HomePage />,
    },
    {
      path: "/bookmarks",
      components: <HomePage />,
    },
  ];

  return <Routes routes={routes} />;
};

export default App;
