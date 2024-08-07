const btn = document.querySelectorAll(".text > span");
const img = document.querySelector(".img");
btn.forEach((i) => {
  i.addEventListener("mouseover", function () {
    let changeImg = this.getAttribute("data-img");
    img.style.backgroundImage = `url(${changeImg})`;
  });
  i.addEventListener("mouseout", () => {
    img.style.backgroundImage = ``;
  });
});
