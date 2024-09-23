import React, { useEffect } from "react";
import useDiary from "../hooks/useDiary";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import { getFormattedDate, setPageTitle } from "../util";
import Viewer from "../components/Viewer";

const Diary = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = useDiary(id);
  useEffect(() => {
    setPageTitle(`${id} Diary`);
  }, []);

  if (!data) {
    return <div>일기를 불러오고 있습니다.</div>;
  } else {
    const { date, emotionId, content } = data;
    const title = `${getFormattedDate(new Date(parseInt(date)))} 기록`;
    const goBack = () => {
      navigate(-1);
    };
    const goEdit = () => {
      navigate(`/edit/${id}`);
    };

    return (
      <div>
        <Header
          title={title}
          leftChild={<Button text={"< 뒤로가기"} onClick={goBack} />}
          rightChild={<Button text={"수정하기"} onClick={goEdit} />}
        />
        <Viewer content={content} emotionId={emotionId} />
      </div>
    );
  }
};

export default Diary;
