"use client";

import React, { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <input
        value={search}
        type="text"
        placeholder="검색하시오."
        onChange={changeSearch}
      />
      <input type="button" value="검색" />
    </div>
  );
};

export default SearchBar;
