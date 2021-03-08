import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "hooks/Context";
import { getData } from "hooks/Axios";
import classnames from "classnames";

import Header from "components/common/head/Header";
import CategoryTiles from "components/common/category/CategoryTiles";
import NewsList from "components/common/news/NewsList";
import Alert from "components/common/alert/Alert";
import ListVerticalLoading from "components/common/loading/ListVerical";

import { HiMenuAlt3 } from "react-icons/hi";

const CategoryPage = () => {
  const {
    news,
    setNews,
    errorMessage,
    setErrorMessage,
    loading,
    setLoading,
    setCurrentCategory,
  } = useContext(GlobalContext);

  const [showCategory, setShowCategory] = useState(true);
  const [showNewsList, setShowNewsList] = useState(false);

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
          <NewsList title news={news} />
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
          handleCategoryClick={handleCategoryClick}
          handleShowHideMenu={handleShowHideMenu}
        />
      ) : showNewsList ? (
        <RenderNewsList />
      ) : null}
    </div>
  );
};

export default CategoryPage;
