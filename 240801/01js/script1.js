// 사용자로부터 이름과 나이를 전달받으세됴
// 반드시 콜백함수를 통해 사용자의 값을 활용해 알림창으로 안녕하세요  00님 00살이네요

// function showData(s, n) {}

// function getData(callback) {
//   const sum = prompt("이름을 입력하세요");
//   const num = Number(prompt("나이를 입력하세요"));
//   callback(sum, num);
// }

// getData((s, n) => {
//   alert(`안녕하세요 ${s}님 나이가 ${n}살 이네요`);
// });

// 자바스크립트 함수 1급시민 자격요건
// 1. 함수가 일반 변수에 자료형으로 할당 가능
// 2. 다른 함수의 인자값으로 사용될 수 있다.
// 3. 다른 함수의 반환값으로 함수를 사용할 수 있다.

// function hello() {
//   return "안녕하세요";
// }

// function bye() {
//   return "안녕히가세요";
// }

// function userCheck(name, fn) {
//   console.log(`${name}님,`, fn());
// }

// userCheck("홍길동", hello);
// userCheck("영심이", bye);

// const init = () => {
//   return (a, b) => {
//     return a - b > 0 ? a - b : b - a;
//   };
// };

// console.log(`${init()(30, 20)}`);
