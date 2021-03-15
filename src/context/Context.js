import React, { useState, createContext } from "react";

import { RiComputerLine } from "react-icons/ri";
import { DiApple } from "react-icons/di";
import { CgMicrosoft } from "react-icons/cg";
import { FaGamepad, FaPlaystation } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { AiFillGoogleCircle, AiFillAndroid } from "react-icons/ai";
import { SiTesla, SiNvidia, SiLinux } from "react-icons/si";
import { GiNetworkBars } from "react-icons/gi";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
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
      id: "networking",
      label: "Networking",
      icon: <GiNetworkBars />,
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
    {
      id: "linux",
      label: "Linux",
      icon: <SiLinux />,
    },
  ];

  const [news, setNews] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({
    id: "technology",
    label: "Technology",
  });

  return (
    <GlobalContext.Provider
      value={{
        categories,
        news,
        setNews,
        currentCategory,
        setCurrentCategory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
