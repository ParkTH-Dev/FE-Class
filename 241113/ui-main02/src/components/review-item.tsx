import React from "react";
import { ReviewData } from "@/types";
import style from "./review-item.module.css";
import ReviewItemDeleteButton from "./review-item-delete-button";

const ReviewItem = ({ id, content, author, createdAt, bookId }: ReviewData) => {
  return (
    <div>
      <div className={style.container}>{author}</div>
      <div className={style.container}>{content}</div>
      <div>
        <div>{new Date(createdAt).toLocaleString()}</div>
        <div>
          <ReviewItemDeleteButton reviewId={id} bookId={bookId} />
        </div>
        <div>삭제하기</div>
      </div>
    </div>
  );
};

export default ReviewItem;
