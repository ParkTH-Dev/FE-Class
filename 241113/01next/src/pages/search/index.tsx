import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import SearchableLayout from "../components/searchable-layout";
import books from "@/mock/book.json";
import BookItem from "../components/book-item";

const Page = () => {
  const router = useRouter();
  const {
    query: { q },
  } = router;
  return (
    <div>
      <span>{`" ${q} "`} 검색 결과</span>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};
Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

export default Page;
