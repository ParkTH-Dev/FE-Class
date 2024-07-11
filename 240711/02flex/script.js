const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const gnb = document.querySelector(".wrap");
  gnb.classList.toggle("active");
});
