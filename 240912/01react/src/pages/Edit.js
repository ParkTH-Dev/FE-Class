import React from "react";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const goTodiary = (e) => {
    if (e.target === "value") {
      navigate("/diary");
    } else {
      alert("미가입 회원은 다이어리 리뷰 불가");
      navigate("/");
    }
  };
  return (
    <div>
      Edit Page
      {/* <Link to={"/diary"}> 다이어리 페이지</Link> */}
      <button onClick={goTodiary}>다이어리 페이지</button>
    </div>
  );
};

export default Edit;
