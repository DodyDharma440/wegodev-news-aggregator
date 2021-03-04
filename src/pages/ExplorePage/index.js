import React, { useState } from "react";
import { getData } from "hooks/Axios";

import Search from "components/common/search";

import NewsList from "components/common/news/NewsList";
import Alert from "components/common/alert/Alert";
import ListVerticalLoading from "components/common/loading/ListVerical";

const ExplorePage = ({
  categories,
  loading,
  errorMessage,
  setLoadingState,
  setErrorMessageState,
}) => {
  const [searchResults, setSearchResults] = useState([]);

  const [finalSearchValue, setFinalSearchValue] = useState("");

  const fetchSearch = (searchValue) => {
    setLoadingState(true);
    setFinalSearchValue(searchValue);
    getData({ type: "everything", query: searchValue })
      .then((response) => {
        if (response.data.totalResults !== 0) {
          setSearchResults(response.data.articles);
        } else {
          setErrorMessageState(`No results for ${searchValue}`);
        }
        setLoadingState(false);
      })
      .catch((error) => {
        setErrorMessageState(error.message);
        setLoadingState(false);
      });
  };

  return (
    <div className="py-16 px-2">
      <Search handleSearchClick={fetchSearch} fetchSearch={fetchSearch} />
      {loading ? (
        <ListVerticalLoading />
      ) : errorMessage ? (
        <Alert variant="danger">{errorMessage}</Alert>
      ) : (
        <>
          {searchResults.length === 0 && (
            <div className="absolute w-screen text-center -mx-2">
              Search for news
            </div>
          )}
          <NewsList news={searchResults} finalSearchValue={finalSearchValue} />
        </>
      )}
    </div>
  );
};

export default ExplorePage;
