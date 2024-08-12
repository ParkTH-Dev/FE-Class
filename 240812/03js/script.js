const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const num1 = document.querySelector("#number01");
  const num2 = document.querySelector("#number02");
  const result = document.querySelector("#result");
  let winner = "";

  let pickedNums = [];
  for (let i = 0; i < num2.value; i++) {
    let picked;
    do {
      picked = Math.ceil(Math.random() * num1.value);
    } while (pickedNums.includes(picked));
    pickedNums.push(picked);
    winner += `${picked}번`;
  }
  result.innerText = `당첨자 : ${winner}`;
});
