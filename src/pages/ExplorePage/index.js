import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "hooks/Context";
import { getData } from "hooks/Axios";

import Search from "components/common/search/Search";

import NewsList from "components/common/news/NewsList";
import Alert from "components/common/alert/Alert";
import CategoryCardSmall from "components/common/category/CategoryCardSmall";
import ListVerticalLoading from "components/common/loading/ListVerical";

const ExplorePage = () => {
  const {
    categories,
    loading,
    setLoading,
    errorMessage,
    setErrorMessage,
  } = useContext(GlobalContext);

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
        setErrorMessage(error.message);
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
            <div className="w-screen -mx-2">
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
          />
        </>
      )}
    </div>
  );
};

export default ExplorePage;
