// // 외부 api 데이터를 찾아오게 되었을 때, 타입을 지정
// const loading = {
//   state: "LOADING",
// };
// const failed = {
//   state: "FAILED",
//   error: {
//     message: "오류발생...",
//   },
// };
// const success = {
//   state: "SUCCESS",
//   response: {
//     data: "movie...",
//   },
// };
// type AsyncTask = {
//   state: "LOADING" | "FAILED" | "SUCCESS";
//   error?: {
//     message: string;
//   };
//   response?: {
//     data: string;
//   };
// };

type LoadingTask = {
  state: "LOADING";
};
type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};
type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

const processResult = (task: AsyncTask) => {
  switch (task.state) {
    case "LOADING": {
      console.log("loading..");
      break;
    }
    case "FAILED": {
      console.log(`failed! :  ${task.error.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`success : ${task.response.data}`);
    }
  }
};
