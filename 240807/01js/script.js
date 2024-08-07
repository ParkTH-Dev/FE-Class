const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  document.querySelector(".lnb").classList.toggle("active");
  btn.classList.toggle("active");
});
