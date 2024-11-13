import { useRouter } from "next/router";
import React from "react";

const Index = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  console.log(id);

  return <h1>book ID: </h1>;
};

export default Index;
