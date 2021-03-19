import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "context/globalContext";
import { getData } from "api/getData";

import Header from "components/head/Header";
import CategoryTiles from "components/category/CategoryTiles";
import CategoryCardLarge from "components/category/CategoryCardLarge";
import NewsList from "components/news/NewsList";
import NewsListItem from "components/news/NewsListItem";
import Alert from "components/alert/Alert";
import ListVerticalLoading from "components/loading/ListVerical";

import { HiMenuAlt3 } from "react-icons/hi";

const CategoryPage = () => {
  const {
    categories,
    news,
    setNews,
    setHeadlineNews,
    setCurrentCategory,
  } = useContext(GlobalContext);

  const [showCategory, setShowCategory] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const fetchNews = ({ type, category }) => {
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
  };

  const handleCategoryClick = (category) => {
    document.body.style.overflow = !showCategory ? "hidden" : "unset";
    setShowCategory(false);
    setCurrentCategory({
      id: category.id,
      label: category.label,
    });

    fetchNews({ type: "everything", category });
    fetchNews({ type: "top-headlines", category });
  };

  const handleShowHideMenu = () => {
    setShowCategory(!showCategory);
    document.body.style.overflow = !showCategory ? "hidden" : "unset";
  };

  useEffect(() => {
    setErrorMessage(undefined);

    if (news.length > 0) {
      setShowCategory(false);
    }

    document.body.style.overflow = "unset";
  }, [setErrorMessage, news.length]);

  const RenderNewsList = () => {
    return (
      <div className="py-16 px-2">
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
      </div>
    );
  };

  return (
    <div id="categoryPage">
      <Header style={showCategory && { zIndex: 0 }} />
      {showCategory ? (
        <>
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
        </>
      ) : null}
      <RenderNewsList />
    </div>
  );
};

export default CategoryPage;
