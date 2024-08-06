const openBtn = document.querySelector("#open");
const wrapper = document.querySelector(".wrapper");
const closeBtn = wrapper.querySelector(".profile > button");
openBtn.addEventListener("click", function () {
  this.classList.add("active");
  wrapper.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  wrapper.classList.remove("active");
  openBtn.classList.remove("active");
});
