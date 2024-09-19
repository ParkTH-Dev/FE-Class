import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import DiaryItem from "./DiaryItem";

const Wrapper = styled.div``;
const DiaryContents = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 30px;
  gap: 10px;
`;
const LeftContent = styled.div`
  flex: 1;
`;
const RightContent = styled.div`
  flex: 3;
  & button {
    width: 100%;
  }
`;
const Select = styled.select`
  background: #ececec;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  font-family: "Nanum Pen Script", cursive;
  cursor: pointer;
`;
const ListContents = styled.div``;

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
];
const DiaryList = ({ data }) => {
  const [sortType, setSortType] = useState("latest");
  const [sortedData, setSortedData] = useState([]);
  const navigate = useNavigate();
  const onClickNew = () => {
    navigate("/new");
  };
  useEffect(() => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        return Number(b.date) - Number(a.date);
      } else {
        return Number(a.date) - Number(b.date);
      }
    };
    const copyList = JSON.parse(JSON.stringify(data));
    copyList.sort(compare);

    setSortedData(copyList);
    // data.map((item) => item.sort(compare));
  }, [data, sortType]);
  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };
  return (
    <Wrapper>
      <DiaryContents>
        <LeftContent>
          <Select value={sortType} onChange={onChangeSortType}>
            {sortOptionList.map((item, i) => (
              <option key={i} value={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </LeftContent>
        <RightContent>
          <Button
            type={"positive"}
            text={"새로운 일기 작성"}
            onClick={onClickNew}
          />
        </RightContent>
      </DiaryContents>
      <ListContents>
        {sortedData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </ListContents>
    </Wrapper>
  );
};

export default DiaryList;
