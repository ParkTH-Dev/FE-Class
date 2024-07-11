const femaleBtn = document.querySelector("#femalebtn");
const maleBtn = document.querySelector("#malebtn");

femaleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  femaleBtn.querySelector("i").classList.toggle("filledA");
  maleBtn.querySelector("i").classList.remove("filledB");
});

maleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  maleBtn.querySelector("i").classList.toggle("filledB");
  femaleBtn.querySelector("i").classList.remove("filledA");
});
