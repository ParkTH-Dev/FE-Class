const imageAll = document.querySelectorAll(".imgWrap .parallaxImage");

const subpageImage = document.querySelector(".subPage .parallaxImage");

const totalNum = imageAll.length;
let x = 0;
let targetX = 0;
const speed = 0.1;
let scrollNum = 0;

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  imageAll.forEach((img, i) => {
    if (i < 4) {
      img.style.transform = `translateY(${
        -scrollNum / (2 * (totalNum - i))
      }px)`;
    }
  });
});

window.addEventListener("mousemove", (e) => {
  x = e.pageX - window.innerWidth / 2;
});

const loop = () => {
  targetX += (x - targetX) * speed;

  imageAll[4].style.transform = `translate(${-targetX / 50}px, ${
    -scrollNum / (2 * (totalNum - 4))
  }px)`;
  imageAll[5].style.transform = `scale(1.1)translate(${-targetX / 100}px, ${
    -scrollNum / (2 * (totalNum - 4))
  }px)`;

  subpageImage.style.transform = ` scale(1.2)translate(${-targetX / 20}px
  )`;
  window.requestAnimationFrame(loop);
};
loop();
