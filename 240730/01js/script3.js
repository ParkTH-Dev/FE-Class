// 사용자로부터 3개의 값을 받기
// 교통비, 식대, 음료비

// const num1 = Number(prompt("교통비"));
// const num2 = Number(prompt("식대"));
// const num3 = Number(prompt("음료비"));

let arr = [];
for (let i = 0; i < 3; i++) {
  const userNum = Number(prompt("교통비, 식대, 음료비 순으로 입력"));
  arr.push(userNum);
}
const [traffic, food, drink] = arr;
const sum = traffic + food + drink;

if (isNaN(sum) || sum === 0) {
  alert("잘못입력했습니다.");
} else if (sum <= 10000) {
  alert("잘했으");
} else {
  alert("못했으");
}
// let num4 = num1 + num2 + num3;
// if (num4 <= 10000) {
//   alert("예산관리를 잘하셨네요");
// } else {
//   alert("예산관리를 잘해주세요");
// }

// 삼항연산자
// num4 = num4 <= 10000 ? "예산관리를 잘하셨네요" : "예산관리를 잘해주세요";
// alert(num4);
