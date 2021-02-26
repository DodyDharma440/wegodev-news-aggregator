import React, { useState } from "react";
import PropTypes from "prop-types";

import { HiSearch, HiX } from "react-icons/hi";

const Search = () => {
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

  return (
    <form>
      <div className="flex my-3 justify-center w-full">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search..."
            name="search"
            value={searchValue}
            onChange={handleOnInputChange}
            className="bg-white focus:outline-none focus:ring-1 focus:shadow-inputField focus:ring-green-400 pl-4 pr-8 w-full py-2 rounded-lg"
          />
          {searchValue.length > 0 ? <ButtonReset /> : null}
        </div>
        <button className="bg-green-400 hover:bg-green-600 rounded-lg px-3 ml-2 focus:outline-none">
          <HiSearch className="text-xl" />
        </button>
      </div>
    </form>
  );
};

export default Search;
