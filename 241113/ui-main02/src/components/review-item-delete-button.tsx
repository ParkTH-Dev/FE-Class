"use client";

import { useActionState, useRef, useEffect } from "react";

const ReviewItemDeleteButton = ({
  reviewId,
  bookId,
}: {
  reviewId: number;
  bookId: number;
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState();
  return (
    <form ref={formRef}>
      <input type="text" name="reviewId" value={reviewId} hidden readOnly />
      <input type="text" name="bookId" value={bookId} hidden readOnly />
      <div onClick={() => formRef.current?.requestSubmit()}>삭제하기</div>
    </form>
  );
};

export default ReviewItemDeleteButton;
