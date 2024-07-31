const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  const text = document.querySelector("#result");
  num1 = Number(prompt("태어난 년도 입력", "2001"));
  num2 = 2024 - num1 + 1;
  text.innerText = num2;
});
