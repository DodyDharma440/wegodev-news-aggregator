import React, { useState } from "react";
import PropTypes from "prop-types";

import { HiSearch, HiX } from "react-icons/hi";

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
      style={{ transform: "translate(-26px, 10px)" }}
    >
      <HiX className="text-xl" />
    </span>
  );

  const handleOnSubmitForm = (e) => {
    e.preventDefault();
    handleSearchClick(searchValue);
  };

  return (
    <form
      onSubmit={handleOnSubmitForm}
      className="flex my-3 justify-center w-full"
    >
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search..."
          name="search"
          value={searchValue}
          onChange={handleOnInputChange}
          className="bg-white ring-1 ring-gray-200 focus:outline-none focus:ring-1 focus:shadow-inputField focus:ring-purple-400 pl-4 pr-8 w-full py-2 rounded-2xl"
        />
        {searchValue.length > 0 ? <ButtonReset /> : null}
      </div>
      <button
        type="submit"
        className="bg-myPalette-lightPurple active:bg-myPalette-purple rounded-2xl px-3 ml-2 focus:outline-none"
      >
        <HiSearch className="text-xl" />
      </button>
    </form>
  );
};

export default Search;
