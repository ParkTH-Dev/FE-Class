import styled from "styled-components";
import { IPost } from "./TimeLine";
import { auth, db, storage } from "../firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  StorageError,
  StorageErrorCode,
  ref,
} from "firebase/storage";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  border: 2px solid rgba(255, 255, 255, 0.5);
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 20px;
`;
const Item = styled.div`
  position: relative;
  & > span {
    font-size: 40px;
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      color: red;
    }
  }
  width: 100%;
  display: flex;
  justify-content: space-between;
  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    cursor: pointer;
    margin-bottom: 20px;
  }
  div > div:nth-child(1) {
    padding: 20px 0;
    font-size: 20px;
    font-weight: 600;
  }
  div > div:nth-of-type(2) {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
  }
`;
const Video = styled.video`
  width: 300px;
  height: 100%;
  border-radius: 15px;
`;

const Post = ({
  photo,
  username,
  post,
  video,
  createdAt,
  userId,
  id,
}: IPost) => {
  const [isEditing, setEditing] = useState(false);
  const [editedPost, setEditedPost] = useState(post);
  const [editedPhoto, setEditedPhoto] = useState<File | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedPost(e.target.value);
  };

  const handleCancle = () => {
    setEditing(false);
  };
  const handleEdit = async () => {
    setEditing(true);
  };

  const date = new Date(createdAt).toLocaleString();
  const user = auth.currentUser;
  const onDelete = async () => {
    const ok = confirm("정말 삭제하시겠습니까?");
    if (!ok || user?.uid !== userId) return;
    try {
      await deleteDoc(doc(db, `contents`, id));
      if (photo) {
        const photoRef = ref(storage, `contents/${user.uid}/${id}`);
        await deleteObject(photoRef);
      }
    } catch (e) {
      console.error(e);
    } finally {
    }
  };
  return (
    <Wrapper>
      <Item>
        {user?.uid === userId ? <span onClick={onDelete}>ⓧ</span> : null}
        <div>
          <div>{username}</div>
          {photo ? <img src={photo} /> : null}
          {video ? <Video src={video} /> : null}
          <div>{post}</div>
          <span>{date}</span>
        </div>
      </Item>
    </Wrapper>
  );
};

export default Post;
