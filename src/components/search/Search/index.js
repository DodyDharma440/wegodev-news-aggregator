import React, { useState } from "react";
import PropTypes from "prop-types";

import { HiX } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

const Search = ({ handleSearchClick }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleOnInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const ButtonReset = () => (
    <span
      onClick={resetInputField}
      className="absolute"
      style={{ transform: "translate(-26px, 14px)" }}
    >
      <HiX className="text-xl" />
    </span>
  );

  const handleOnSubmitForm = (e) => {
    e.preventDefault();
    handleSearchClick(searchValue);
  };

  return (
    <>
      <div className="bg-myPalette-purple bg-opacity-80 max-h-48 -m-2 px-5 pt-4 pb-10 items-end">
        <div className="-m-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#9d25fb"
              fillOpacity="1"
              d="M0,224L60,240C120,256,240,288,360,288C480,288,600,256,720,218.7C840,181,960,139,1080,144C1200,149,1320,203,1380,229.3L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
        </div>
        <h1 className="text-2xl text-white font-semibold w-7/12 ml-2">
          Search For The News You Want
        </h1>
      </div>
      <form
        onSubmit={handleOnSubmitForm}
        className="flex my-3 justify-center w-11/12 m-auto transform -translate-y-5"
      >
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search for news..."
            name="search"
            value={searchValue}
            onChange={handleOnInputChange}
            autoComplete="off"
            required
            className="bg-white ring-1 ring-gray-200 focus:outline-none focus:ring-1 focus:shadow-inputField focus:ring-purple-400 pl-4 pr-8 w-full py-3 rounded-xl shadow-xl"
          />
          {searchValue.length > 0 ? <ButtonReset /> : null}
        </div>
        <button
          type="submit"
          className="bg-myPalette-lightOrange active:bg-myPalette-purple rounded-2xl px-3 ml-2 focus:outline-none shadow-xl"
        >
          <FiSearch className="text-xl text-gray-200" />
        </button>
      </form>
    </>
  );
};

Search.propTypes = {
  handleSearchClick: PropTypes.func.isRequired,
};

export default Search;
