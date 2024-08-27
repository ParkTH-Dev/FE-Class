const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth / 1.1;
canvas.height = window.innerHeight / 1.1;

const ctx = canvas.getContext("2d");

// 원 혹은 호
// arc(x, y, r, starAngle, endAngle, counterClockwise)

// ctx.beginPath();
// ctx.arc(200, 150, 100, 0, Math.PI * 2, true);
// ctx.closePath();
// ctx.fillStyle = "red";
// ctx.strokeStyle = "yellow";
// ctx.fill();
// ctx.stroke();

ctx.beginPath();
ctx.arc(120, 100, 50, 0, Math.PI, true);
ctx.arc(220, 100, 50, 0, Math.PI, false);
ctx.closePath();
ctx.fillStyle = "red";
ctx.fill();

ctx.beginPath();
ctx.arc(120, 200, 50, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 200, 50, 0, (Math.PI / 180) * 60, false);
// ctx.closePath();
ctx.strokeStyle = "blue";
ctx.stroke();
