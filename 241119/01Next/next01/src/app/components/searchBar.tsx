"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?q=${search}`);
  };
  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={search}
          type="text"
          placeholder="검색하시오."
          onChange={changeSearch}
        />
        <input type="submit" value="검색" />
      </form>
    </div>
  );
};

export default SearchBar;
