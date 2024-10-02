import styled from "styled-components";
import { auth, db, storage } from "../firebase";
import React, { useEffect, useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { IPost } from "../components/TimeLine";
import Post from "../components/Post";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const AvatarUpload = styled.label`
  width: 110px;
  height: 110px;
  background: #1d9bf0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  svg {
    width: 100px;
  }
`;
const AvatarImg = styled.img`
  height: 100%;
`;
const AvatarInput = styled.input`
  display: none;
`;
const Name = styled.span`
  font-size: 22px;
`;

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const ChangeNameBtn = styled.span`
  background: #3b3a3a;
  color: #fff;
  border-radius: 8px;
  padding: 6px 10px;
  cursor: pointer;
  display: inline-block;
`;
const NameInput = styled.input`
  background: #000;
  color: #fff;
  text-align: center;
  border: none;
  border-bottom: 1px solid #fff;
  padding: 8px 0;
  font-size: 18px;
  &:focus {
    outline: none;
  }
`;

const Profile = () => {
  const user = auth.currentUser;
  const [profileImg, setProfileImg] = useState(
    user?.photoURL || null || undefined
  );
  const [post, setPost] = useState<IPost[]>([]);
  const [name, setName] = useState(user?.displayName ?? "Anonmous");
  const [editMode, serEditMode] = useState(false);
  const onProfileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!user) return;
    if (files && files.length === 1) {
      const file = files[0];
      const locationRef = ref(storage, `avatars/${user?.uid}`);
      const result = await uploadBytes(locationRef, file);
      const avatarUrl = await getDownloadURL(result.ref);
      setProfileImg(avatarUrl);
      await updateProfile(user, {
        photoURL: avatarUrl,
      });
    }
  };
  const onChangeNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeNameBtn = async () => {
    if (!user) return;
    serEditMode((prev) => !prev);
    if (!editMode) return;
    try {
      await updateProfile(user, {
        displayName: name,
      });
    } catch (e) {
      console.error(e);
    } finally {
      serEditMode(false);
    }
  };

  const fetchPosts = async () => {
    const postQuery = query(
      collection(db, "contents"),
      where("userId", "==", user?.uid),
      orderBy("createdAt", "desc"),
      limit(25)
    );
    const snapshot = await getDocs(postQuery);
    const posts = snapshot.docs.map((doc) => {
      const { createdAt, photo, video, post, userId, username } = doc.data();
      return { createdAt, photo, video, post, userId, username, id: doc.id };
    });
    setPost(posts);
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Wrapper>
      <AvatarUpload htmlFor="avatar">
        {Boolean(profileImg) ? (
          <AvatarImg src={profileImg} />
        ) : (
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
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        )}
      </AvatarUpload>
      <AvatarInput
        id="avatar"
        type="file"
        accept="image/*"
        onChange={onProfileChange}
      />
      {editMode ? (
        <NameInput onChange={onChangeNameInput} value={name} />
      ) : (
        <Name>{user?.displayName ?? "Anonymous"}</Name>
      )}
      <ChangeNameBtn onClick={onChangeNameBtn}>
        {editMode ? "저장" : "변경"}
      </ChangeNameBtn>

      <Posts>
        {post.map((item) => (
          <Post key={item.id} {...item} />
        ))}
      </Posts>
    </Wrapper>
  );
};

export default Profile;
