// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(20);
//   }, 3000);
// });
// promise.then((response) => {
//   console.log(response);
// });
// promise.catch((error) => {
//   if (typeof error === "string") {
//     console.log(error);
//   }
// });
/////////////////////
// => 실제로 이러한 객체가 들어왔다고 한다면?
// 객체 최적화된 => interface
interface Post {
  id: number;
  title: string;
  content: string;
}

const fetchPost = (): Promise<Post> => {
  return new Promise<Post>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 본문",
      });
    }, 3000);
  });
};
// promise.then((response) => {
//   console.log(response);
// });
// promise.catch((error) => {
//   if (typeof error === "string") {
//     console.log(error);
//   }
// });
