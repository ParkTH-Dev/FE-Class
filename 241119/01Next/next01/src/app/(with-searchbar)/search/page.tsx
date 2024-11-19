import React from "react";

export const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) => {
  const { q } = await searchParams;
  console.log(q);
  return <div>Search Page : {q}</div>;
};

export default Page;
