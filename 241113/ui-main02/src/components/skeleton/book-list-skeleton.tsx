import BookItemSkeleton from "./book-item-skeleton";

const BookListSkeleton = ({ count }: { count: number }) => {
  return new Array(count)
    .fill(0)
    .map((_, i) => <BookItemSkeleton key={`book-item-skeleton-${i}`} />);
};

export default BookListSkeleton;
