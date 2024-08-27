const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth / 1.1;
canvas.height = window.innerHeight / 1.1;

const ctx = canvas.getContext("2d");

// rect() => 사각형
//  삼각형, 원
// arc()
// ellipse()

// ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterClock)

// ctx.beginPath();
// ctx.ellipse(200, 70, 80, 50, 0, 0, Math.PI * 2);
// ctx.closePath();
// ctx.fillStyle = "red";
// ctx.fill();

// ctx.beginPath();
// ctx.ellipse(150, 200, 80, 50, (Math.PI / 180) * -30, 0, Math.PI * 2);
// ctx.closePath();
// ctx.fillStyle = "yellow";
// ctx.fill();

ctx.scale(1, 0.7);
ctx.beginPath();
ctx.arc(200, 150, 80, 0, Math.PI * 0.8, true);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 150, 30, 0, Math.PI * 0.8, true);
ctx.closePath();
ctx.stroke();
