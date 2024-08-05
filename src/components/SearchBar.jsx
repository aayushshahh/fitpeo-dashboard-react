import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchBar = () => {
  return (
    <div className="search-bar flex gap-0 items-center bg-darkGrey border border-lightGrey rounded-md w-full md:w-auto">
      <div className="xl:size-10 md:size-8 size-6  flex items-center justify-center">
        <MagnifyingGlassIcon className="xl:size-6 md:size-4 size-3" />
      </div>
      <input
        type="search"
        className="search-bar h-10 md:w-72 w-full rounded-md bg-darkGrey placeholder:text-primaryWhite placeholder:text-sm"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
