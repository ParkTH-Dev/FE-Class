const btn = document.querySelector("#toggleBox button");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    btn.innerText = "라이트모드";
  } else {
    btn.innerText = "다크모드";
  }
});
