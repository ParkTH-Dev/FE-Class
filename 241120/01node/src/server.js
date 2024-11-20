// 웹 서버를 만들기 위한 기본 설정
import express from "express"; // express 웹 프레임워크를 불러옴
import morgan from "morgan"; // 로그를 남기기 위한 morgan 도구를 불러옴

// 서버가 사용할 포트 번호를 4000으로 지정
const PORT = 4000;

// express로 서버 애플리케이션 생성
const app = express();
// morgan을 개발자 모드로 설정
const morganMiddleWare = morgan("dev");
// morgan 미들웨어를 서버에 적용 - 요청이 들어올 때마다 로그를 출력함
app.use(morganMiddleWare);

// 메인 페이지를 처리할 라우터 생성
const globalRouter = express.Router();
// 메인 페이지("/") 접속시 실행될 함수 - "Home" 텍스트를 보여줌
const handleHome = (req, res) => {
  return res.send("Home");
};
// 라우터에 GET 메소드로 "/" 경로 연결
globalRouter.get("/", handleHome);

// 사용자 관련 페이지를 처리할 라우터 생성
const userRouter = express.Router();
// 사용자 편집 페이지 접속시 실행될 함수 - "User Edit" 텍스트를 보여줌
const handleEditUser = (req, res) => {
  return res.send("User Edit");
};
// 라우터에 GET 메소드로 "/users" 경로 연결
userRouter.get("/edit", handleEditUser);

// 비디오 관련 페이지를 처리할 라우터 생성
const videoRouter = express.Router();
// 비디오 시청 페이지 접속시 실행될 함수 - "Watch Video" 텍스트를 보여줌
const handleWatchVideo = (req, res) => {
  return res.send("Watch Video");
};
// 라우터에 GET 메소드로 "/video" 경로 연결
videoRouter.get("/watch", handleWatchVideo);

// 각 라우터를 서버의 특정 경로에 연결
app.use("/", globalRouter); // 메인 라우터는 루트 경로("/")에 연결
app.use("/users", userRouter); // 사용자 라우터는 "/users" 경로에 연결
app.use("/video", videoRouter); // 비디오 라우터는 "/video" 경로에 연결

// 서버가 시작될 때 실행될 함수 - 콘솔에 서버 실행 메시지 출력
const handleListening = () =>
  console.log(`Server Listening on Port 4000 : http://localhost:${PORT}`);

// 서버를 4000번 포트에서 시작하고, 시작되면 handleListening 함수 실행
app.listen(4000, handleListening);
