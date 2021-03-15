import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "context/Context";
import { getData } from "api/getData";

import Search from "components/search/Search";
import NewsList from "components/news/NewsList";
import NewsListItem from "components/news/NewsListItem";
import Alert from "components/alert/Alert";
import CategoryCardSmall from "components/category/CategoryCardSmall";
import ListVerticalLoading from "components/loading/ListVerical";

const ExplorePage = () => {
  const { categories } = useContext(GlobalContext);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [searchResults, setSearchResults] = useState([]);
  const [finalSearchValue, setFinalSearchValue] = useState("");

  const fetchSearch = (searchValue) => {
    setLoading(true);
    setFinalSearchValue(searchValue);
    getData({ type: "everything", query: searchValue })
      .then((response) => {
        if (response.data.totalResults !== 0) {
          setSearchResults(response.data.articles);
          setLoading(false);
          setErrorMessage(undefined);
        } else {
          setErrorMessage(`No results for ${searchValue}`);
          setLoading(false);
        }
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
        setLoading(false);
      });
  };

  const handleCategoryClick = (categoryId) => {
    fetchSearch(categoryId);
  };

  useEffect(() => {
    setErrorMessage(undefined);
  }, [setErrorMessage]);

  return (
    <div className="pb-16 pt-2 px-2">
      <Search handleSearchClick={fetchSearch} />
      {loading ? (
        <ListVerticalLoading />
      ) : errorMessage ? (
        <Alert variant="danger">{errorMessage}</Alert>
      ) : (
        <>
          {searchResults.length === 0 && (
            <div className="w-screen -mx-2 transform -translate-y-4">
              <h3 className="text-center font-bold text-xl mb-2">Categories</h3>
              <div className="mx-4 flex flex-wrap justify-center">
                {categories.map((category, index) => {
                  return (
                    <CategoryCardSmall
                      key={index}
                      category={category}
                      handleCategoryClick={handleCategoryClick}
                    >
                      {category.icon}
                    </CategoryCardSmall>
                  );
                })}
              </div>
            </div>
          )}
          <NewsList
            title={false}
            news={searchResults}
            finalSearchValue={finalSearchValue}
          >
            {searchResults.map((newsItem, index) => {
              return <NewsListItem key={index} newsItem={newsItem} />;
            })}
          </NewsList>
        </>
      )}
    </div>
  );
};

export default ExplorePage;
