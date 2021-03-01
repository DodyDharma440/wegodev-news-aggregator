import React from "react";

import Routes from "./routes/Routes";

import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";

import { RiComputerLine } from "react-icons/ri";
import { DiApple } from "react-icons/di";
import { CgMicrosoft } from "react-icons/cg";
import { FaGamepad, FaPlaystation } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { AiFillGoogleCircle, AiFillAndroid } from "react-icons/ai";
import { SiIntel, SiTesla, SiNvidia } from "react-icons/si";

const categories = [
  {
    id: "technology",
    label: "Technology",
    icon: <RiComputerLine />,
  },
  {
    id: "apple",
    label: "Apple",
    icon: <DiApple />,
  },
  {
    id: "microsoft",
    label: "Microsoft",
    icon: <CgMicrosoft />,
  },
  {
    id: "game",
    label: "Game",
    icon: <FaGamepad />,
  },
  {
    id: "programming",
    label: "Programming",
    icon: <BiCodeAlt />,
  },
  {
    id: "google",
    label: "Google",
    icon: <AiFillGoogleCircle />,
  },
  {
    id: "intel",
    label: "Intel",
    icon: <SiIntel />,
  },
  {
    id: "android",
    label: "Android",
    icon: <AiFillAndroid />,
  },
  {
    id: "tesla",
    label: "Tesla",
    icon: <SiTesla />,
  },
  {
    id: "playstation",
    label: "Play Station",
    icon: <FaPlaystation />,
  },
  {
    id: "nvidia",
    label: "Nvidia",
    icon: <SiNvidia />,
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
      components: <CategoryPage categories={categories} />,
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
