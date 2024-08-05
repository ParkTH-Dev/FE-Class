const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const num1 = form.querySelector(".num1").value;
  const num2 = form.querySelector(".num2").value;
  const max = num1 > num2 ? num1 : num2;
  let gcd = 0;
  for (let i = 0; i <= max; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }
  const result = document.querySelector(".result");
  result.innerHTML = `
  <span>${gcd}</span>
  `;
});
