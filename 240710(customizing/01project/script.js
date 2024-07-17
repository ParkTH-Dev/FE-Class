const slides = document.querySelector(".items");
const pager = document.querySelectorAll(".btn .img_btn");

pager.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    slides.style.left = `${-i * 100}%`;
  });
});
