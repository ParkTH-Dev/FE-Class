// 03. Axios 활용
import axios from "axios";

// axios는 fetch 대용이다.
const api = axios.create({
  // 공통된 URL
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    // headers를 먼저 받아와야 한다.
    "Content-Type": "application/json",
    // 이제 interceptors를 사용 가능
  },
});

// https://www.npmjs.com/package/axios

// Add a request interceptor
api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // console.log("request start", config);
    return config;
  },
  function (error) {
    // console.error("request error", error);
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    // console.log("get response", response);

    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // console.error("response err", error);

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default api;
