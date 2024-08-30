const cursorItem = document.querySelector(".cursorItem");
const circle = document.querySelector(".circle");
const buttonAll = document.querySelectorAll("a");

let x = 0;
let y = 0;
let targetX = 0;
let targetY = 0;
const speed = 0.07;

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;
});
const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;
  cursorItem.style.transform = `translate(${targetX}px, ${targetY}px)`;
  window.requestAnimationFrame(loop);
};
loop();

buttonAll.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    circle.style.transform = "scale(0.3)";
  });
  btn.addEventListener("mouseleave", () => {
    circle.style.transform = "scale(1)";
  });
});
