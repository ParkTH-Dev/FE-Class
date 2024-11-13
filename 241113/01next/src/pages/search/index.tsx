import React from "react";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  const {
    query: { q },
  } = router;
  return (
    <div>
      <h1>search : {q}</h1>
    </div>
  );
};

export default Search;
