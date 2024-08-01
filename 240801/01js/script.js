// 함수선언
// 함수의 매개변수는 반드시 필요한 것은 아니다.
// 함수를 호출할 때, 매개변수의 자리에 어떤 값을 전달하고자 한다면, 인수 혹은 인자값 삽입
// 인자값 = 매개변수 사실상 같지만 용어를 잘 구분해서 사용하자

// 일반함수 혹은 function
// function clacSum() {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum}`);
// }

// clacSum();

// 익명함수
// const clacSum = function () {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum}`);
// };

// clacSum();

// 화살표함수
// const clacSum = () => {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum}`);
// };

// clacSum();

// function sum(a, b) {
//   const result = a + b;
//   alert(`두 수의 합은 ${result}`);
// }
// sum(1, 2);

// const num = Number(prompt("숫자를 입력하세요."));

// function clacSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// alert(`1부터 ${num}까지 더하면 ${clacSum(num)}입니다.`);

// function multiple(a, b, c = 10) {
//   console.log(a + b + c);
// }
// multiple(2, 4, 1);

document.body.innerHTML += `<button id="btn">Click</button>`;

const display = () => {
  alert("클릭했다");
};

const button = document.querySelector("#btn");
button.addEventListener("click", display);
