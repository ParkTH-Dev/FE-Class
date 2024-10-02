import styled from "styled-components";
import { IPost } from "./TimeLine";
import { auth, db, storage } from "../firebase";
import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  StorageError,
  StorageErrorCode,
  uploadBytes,
  uploadBytesResumable,
  ref,
} from "firebase/storage";
import { useState } from "react";
import { GrUpdate } from "react-icons/gr";

const Wrapper = styled.div`
  display: flex;
  border: 2px solid rgba(255, 255, 255, 0.5);
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 20px;
`;
const Item = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;

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
  }
`;
const UserName = styled.span`
  padding: 20px;
  font-size: 22px;
`;
const Video = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

const EditorColumns = styled.div`
  display: flex;
  .update {
    position: absolute;
    top: 10px;
    right: 60px;
    font-size: 30px;
    cursor: pointer;
  }
  .close {
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
`;
const EditBtnWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  svg {
    width: 30px;
  }
`;
const PostText = styled.span`
  font-size: 20px;
  margin-bottom: 10px;
`;
const EditPostFormTextArea = styled.textarea`
  background-color: #000;
  color: #fff;
  width: 100%;
  height: 100px;
  padding: 10px;
  resize: none;
  font-size: 18px;
  border-radius: 10px;
  &::placeholder {
    opacity: 1;
    transition: opacity 0.3s;
  }
  &:focus {
    outline: none;
    border: 1px solid #1d9bf0;
    &::placeholder {
      opacity: 0;
    }
  }
`;
const CancelBtn = styled.span`
  border: 1px solid #fff;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
`;
const UpdateBtn = styled.span`
  border: 1px solid #fff;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
`;
const SetContentBtn = styled.label`
  width: 24px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: #1d9bf0;
  }
`;
const SetContentInputBtn = styled.input`
  display: none;
`;

const Post = ({
  createdAt,
  photo,
  username,
  post,
  video,
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
  const onUpdate = async () => {
    try {
      if (user?.uid !== userId) return;

      const postDoc = await getDoc(doc(db, "contents", id));
      if (!postDoc.exists()) throw new Error("Documents does not exist");

      const postData = postDoc.data();

      if (postData) {
        if (postData.photo) postData.fileType = "image";
        if (postData.video) postData.fileType = "video";
      }

      const exsitingFileType = postData?.fileType || null;
      if (editedPhoto) {
        const newFileType = editedPhoto.type.startsWith("image/")
          ? "image"
          : "video";
        if (exsitingFileType && exsitingFileType !== newFileType) {
          alert("new can only upload the same type of contents");
          return;
        }
        const locationRef = ref(storage, `contents/${user.uid}/${id}`);
        const uploadTask = uploadBytesResumable(locationRef, editedPhoto);
        if (editedPhoto.size >= 1000 * 1024 * 1024) {
          uploadTask.cancel();
          throw new StorageError(
            StorageErrorCode.CANCELED,
            "업로드 가능 최대 용량은 5MB입니다."
          );
        }
        const result = await uploadBytes(locationRef, editedPhoto);
        const url = await getDownloadURL(result.ref);
        await updateDoc(doc(db, "contents", id), {
          post: editedPost,
          photo: newFileType === "image" ? url : "",
          video: newFileType === "video" ? url : "",
          fileType: newFileType,
        });
      } else {
        await updateDoc(doc(db, "contents", id), { post: editedPost });
      }
    } catch (e) {
      console.error(e);
    } finally {
      setEditing(false);
    }
  };
  const onClickSetContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length === 1) setEditedPhoto(files[0]);
  };
  return (
    <Wrapper>
      <Item>
        <UserName>{username}</UserName>

        <div>
          {photo ? <img src={photo} /> : null}
          {video ? <Video autoPlay muted controls src={video} /> : null}
          <EditorColumns>
            {user?.uid === userId ? (
              <>
                {isEditing ? (
                  <EditBtnWrap>
                    <CancelBtn onClick={handleCancle}>cancel</CancelBtn>
                    <UpdateBtn onClick={onUpdate}>update</UpdateBtn>
                    <SetContentBtn htmlFor="edit-content">
                      <svg
                        data-slot="icon"
                        fill="none"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                      </svg>
                    </SetContentBtn>
                    <SetContentInputBtn
                      id="edit-content"
                      type="file"
                      accept="video/*, image/*"
                      onChange={onClickSetContent}
                    ></SetContentInputBtn>
                  </EditBtnWrap>
                ) : (
                  <GrUpdate className="update" onClick={handleEdit} />
                )}

                <span className="close" onClick={onDelete}>
                  ⓧ
                </span>
              </>
            ) : null}
          </EditorColumns>
          {isEditing ? (
            <EditPostFormTextArea
              placeholder={post}
              onChange={onChange}
              value={editedPost}
            ></EditPostFormTextArea>
          ) : (
            <PostText>{post}</PostText>
          )}
          <span>{date}</span>
        </div>
      </Item>
    </Wrapper>
  );
};

export default Post;
