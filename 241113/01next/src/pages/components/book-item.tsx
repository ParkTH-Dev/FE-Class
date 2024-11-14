import type { IBookData } from "@/types";
import Link from "next/link";
import style from "./book-item.module.css";

const BookItem = ({
  id,
  title,
  subTitle,
  author,
  publisher,
  coverImgUrl,
}: IBookData) => {
  return (
    <Link className={style.container} href={`/book/${id}`}>
      <img src={coverImgUrl} />
      <div>
        <div>
          <span className={style.title}>{title}</span>
          <div className={style.subtitle}>{subTitle}</div>
        </div>
        {/* div>{description}</div> */}
        <br />
        <div className={style.author}>
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
};

export default BookItem;
