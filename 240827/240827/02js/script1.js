const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth / 1.1;
canvas.height = window.innerHeight / 1.1;

const ctx = canvas.getContext("2d");

// 사각형 형태의 도형을 만들 때
// 속성 정의 먼저 (*색상, 외곽선 => 도형 그림)
// 삼각형 형태의 도형을 만들 때에는
// 도형 드로잉 선언
// beginPath()
// 경로 그림
// 직선경로 : lineTo(x, y)
// 실제 경로가 그려지도록 하는 함수 stroke()
// 해당 경로사이에 채색 함수 fill()
// closePath() => 어떤 도형을 그릴것인가에 대한 경로 드로잉 종료 선언
// 위치 좌표값을 세팅하거ㅓ나 이동하고자 할 때: moveTo(x, y)

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(200, 200);
// ctx.closePath();
// ctx.stroke();

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 100);
ctx.lineTo(50, 150);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150, 100);
ctx.lineTo(250, 50);
ctx.lineTo(250, 150);
ctx.closePath();
// ctx.stroke();
ctx.fillStyle = "rgb(0, 200, 0)";
ctx.fill();
