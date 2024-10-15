// axios 라이브러리를 불러옵니다. 이 라이브러리는 HTTP 요청을 쉽게 도와주는 도구입니다.
import axios from "axios";

// axios 인스턴스를 생성합니다. 여기서 공통으로 사용할 기본 설정을 지정합니다.
const api = axios.create({
  // API의 기본 URL을 설정합니다. 여기서는 The Movie Database(TMDB)의 API URL을 사용합니다.
  baseURL: "https://api.themoviedb.org/3/",

  // 요청 시 기본으로 포함될 HTTP 헤더를 설정합니다. 여기서는 JSON 형식의 데이터를 전송함을 명시합니다.
  headers: { "Content-type": "application/json" },
});

// 요청 전(intercept) 동작을 정의하는 인터셉터를 추가합니다.
api.interceptors.request.use(
  // 요청이 시작될 때 실행되는 함수입니다.
  // 요청의 설정(config)을 받아서 콘솔에 로그를 남기고 그대로 반환합니다.
  function (config) {
    console.log("request start", config); // 요청 시작 시 로그 출력
    return config; // 요청을 수정 없이 그대로 진행합니다.
  },

  // 요청 도중에 오류가 발생했을 때 실행되는 함수입니다.
  function (error) {
    console.error("request error", error); // 오류 로그 출력
    return Promise.reject(error); // 오류를 그대로 반환하여 이후 처리합니다.
  }
);

// 응답을 처리하는 인터셉터를 추가합니다.
api.interceptors.response.use(
  // 서버로부터 정상적인 응답을 받았을 때 실행되는 함수입니다.
  function (response) {
    console.log("get response", response); // 응답 데이터 로그 출력
    return response; // 응답 데이터를 그대로 반환합니다.
  },

  // 응답 과정에서 오류가 발생했을 때 실행되는 함수입니다.
  function (error) {
    console.error("response error", error); // 응답 오류 로그 출력
    return Promise.reject(error); // 오류를 그대로 반환하여 이후 처리합니다.
  }
);

// axios 인스턴스를 외부에서 사용할 수 있도록 export합니다.
export default api;
