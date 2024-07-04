const modalBtn = document.querySelector("#opne");
const modal = document.querySelector("#modal_box");
const closeBtn = document.querySelector(".close > i");

modalBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", function () {
  this.classList.remove("active");
});
