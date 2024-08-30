const contentAll = document.querySelectorAll(".contWrap img");
const shadow = contentAll[0];
const human = contentAll[1];
const date = contentAll[2];
const textImg = contentAll[3];

let x = 0;
let targetX = 0;
const speed = 0.1;

window.addEventListener("mousemove", (e) => {
  x = e.pageX - window.innerWidth / 2;
});

const loop = () => {
  targetX += (x - targetX) * speed;

  shadow.style.transform = `translate(${targetX / 35}px)`;
  date.style.transform = `translate(${targetX / 20}px)`;
  human.style.transform = `translate(${-targetX / 20}px)`;
  textImg.style.transform = `translate(${-targetX / 10}px)`;

  window.requestAnimationFrame(loop);
};

loop();
