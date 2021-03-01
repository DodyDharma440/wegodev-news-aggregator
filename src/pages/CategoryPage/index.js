import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import classnames from "classnames";

import CategoryTiles from "components/common/category/CategoryTiles";
import NewsList from "components/common/news/NewsList";
import Alert from "components/common/alert/Alert";
import ListVerticalLoading from "components/common/loading/ListVerical";

import { HiMenuAlt3 } from "react-icons/hi";

const CategoryPage = ({ categories }) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [news, setNews] = useState([]);

  const [showCategory, setShowCategory] = useState(true);
  const [showNewsList, setShowNewsList] = useState(false);

  const [currentCategory, setCurrentCategory] = useState({
    id: "technology",
    label: "Technology",
  });

  const fetchNews = (cat) => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${cat}&apiKey=0b1eab85c7934f29b778cb90cf9a7ff3`
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

  const handleCategoryClick = (cat) => {
    setShowCategory(false);
    setShowNewsList(true);
    setLoading(true);
    setCurrentCategory({
      id: cat.id,
      label: cat.label,
    });
    fetchNews(cat.id);
  };

  const handleShowHideMenu = () => {
    setShowCategory(!showCategory);
    setShowNewsList(!showNewsList);
  };

  const RenderNewsList = () => {
    return (
      <>
        {loading ? (
          <ListVerticalLoading />
        ) : errorMessage ? (
          <Alert variant="danger">{errorMessage}</Alert>
        ) : (
          <NewsList news={news} currentCategory={currentCategory.label} />
        )}
        <div className="fixed bottom-16 right-4">
          <button
            onClick={handleShowHideMenu}
            className="bg-myPalette-purple w-14 h-14 rounded-full flex justify-center items-center focus:outline-none active:bg-purple-700"
          >
            <HiMenuAlt3 className="text-white text-2xl" />
          </button>
        </div>
      </>
    );
  };

  const containerStyle = classnames("", {
    "py-16 px-2": showNewsList,
  });

  return (
    <div id="categoryPage" className={containerStyle}>
      {showCategory ? (
        <CategoryTiles
          categories={categories}
          handleCategoryClick={handleCategoryClick}
          newsLength={news.length}
          handleShowHideMenu={handleShowHideMenu}
        />
      ) : showNewsList ? (
        <RenderNewsList />
      ) : (
        false
      )}
    </div>
  );
};

CategoryPage.propTypes = {
  categories: PropTypes.array,
};

export default CategoryPage;
