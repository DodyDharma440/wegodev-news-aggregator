import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "context/Context";
import { getData } from "api/getData";
import classnames from "classnames";

import Header from "components/head/Header";
import CategoryTiles from "components/category/CategoryTiles";
import CategoryCardLarge from "components/category/CategoryCardLarge";
import NewsList from "components/news/NewsList";
import NewsListItem from "components/news/NewsListItem";
import Alert from "components/alert/Alert";
import ListVerticalLoading from "components/loading/ListVerical";

import { HiMenuAlt3 } from "react-icons/hi";

const CategoryPage = () => {
  const { categories, news, setNews, setCurrentCategory } = useContext(
    GlobalContext
  );

  const [showCategory, setShowCategory] = useState(true);
  const [showNewsList, setShowNewsList] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const handleCategoryClick = (category) => {
    setShowCategory(false);
    setShowNewsList(true);
    setLoading(true);
    setCurrentCategory({
      id: category.id,
      label: category.label,
    });

    getData({
      type: "everything",
      query: category.id,
    })
      .then((response) => {
        setNews(response.data.articles);
        setLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setLoading(false);
      });
  };

  const handleShowHideMenu = () => {
    setShowCategory(!showCategory);
    setShowNewsList(!showNewsList);
  };

  useEffect(() => {
    setErrorMessage(undefined);
  }, [setErrorMessage]);

  const RenderNewsList = () => {
    return (
      <>
        <Header />
        {loading ? (
          <ListVerticalLoading />
        ) : errorMessage ? (
          <Alert variant="danger">{errorMessage}</Alert>
        ) : (
          <NewsList title>
            {news.map((newsItem, index) => {
              return <NewsListItem key={index} newsItem={newsItem} />;
            })}
          </NewsList>
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
        <CategoryTiles handleShowHideMenu={handleShowHideMenu}>
          {categories.map((category, index) => {
            return (
              <div key={index} className="col-span-1">
                <CategoryCardLarge
                  category={category}
                  handleCategoryClick={handleCategoryClick}
                />
              </div>
            );
          })}
        </CategoryTiles>
      ) : showNewsList ? (
        <RenderNewsList />
      ) : null}
    </div>
  );
};

export default CategoryPage;
