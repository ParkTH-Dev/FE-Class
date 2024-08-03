const num1 = Number(prompt("첫 번째 숫자를 입력해주세요."));
const num2 = Number(prompt("두 번째 숫자를 입력해주세요."));
const num3 = Number(prompt("세 번째 숫자를 입력해주세요."));

if (num1 + num2 > num3 && num2 + num3 > num1 && num1 + num3 > num2) {
  console.log("yes");
} else {
  console.log("no");
}
