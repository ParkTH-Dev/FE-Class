import {
  collection,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  Unsubscribe,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import Post from "./Post";

export interface IPost {
  createdAt: number;
  photo?: string;
  video?: string;
  post: string;
  userId: string;
  username: string;
  id: string;
}

const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: scroll;
  padding: 0 10px; */
`;

const TimeLine = () => {
  const [post, setPost] = useState<IPost[]>([]);

  useEffect(() => {
    let unsubscribe: Unsubscribe | null = null;
    const fetchPost = async () => {
      const postQuery = query(
        collection(db, "contents"),
        orderBy("createdAt", "desc"),
        limit(25)
      );
      // const snapshot = await getDocs(postQuery);
      // const posts = snapshot.docs.map((doc) => {
      //   const { createdAt, photo, video, post, userId, username } = doc.data();
      //   return { id: doc.id, createdAt, photo, video, post, userId, username };
      // });
      unsubscribe = await onSnapshot(postQuery, (snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          const { createdAt, photo, video, post, userId, username } =
            doc.data();
          return {
            id: doc.id,
            createdAt,
            photo,
            video,
            post,
            userId,
            username,
          };
        });
        setPost(posts);
      });
    };
    fetchPost();
    return () => {
      unsubscribe && unsubscribe();
    };
  }, []);
  return (
    <Wrapper>
      {post.map((item) => (
        <Post key={item.id} {...item} />
      ))}
    </Wrapper>
  );
};

export default TimeLine;
