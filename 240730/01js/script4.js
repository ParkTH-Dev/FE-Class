// let x = 10;
// let y = 4;
// // let result = x + y;
// x--;
// console.log(x--);

// y++;
// console.log(y);

// result = x - y;
// console.log(result);
// result = x + y;
// console.log(result);
// result = x - y;
// console.log(result);
// result = x * y;
// console.log(result);
// result = x / y;
// console.log(result);
// result = x % y;
// console.log(result);

// let str = "<table border='1'>";
// str += "<tr>";
// str += "<td>1</td><td>2</td><td>3</td>";
// str += "</tr>";
// str += "</table>";

// document.write(str);

// if(조건식 > true여야 실행){
//     실행문
// }
// const x = 6;
// if (x > 5) {
//   console.log(`${x}는 5보다 큽니다!`);
// }else{
//     // 조건식이 false일때
// }

// const userInput = prompt("이름을 입력하세요!");
// if (userInput === null) {
//   alert("취소했습니다");
// } else {
//   alert(`${userInput}=님 환영합니다.`);

// }
// const score = Number("자바스크립트 시험점수");
// if (score !== null) {
//   if (score >= 90) alert("A 학점");
//   else if (score >= 80) alert("B 학점");
//   else alert("C 학점");
// }

const num1 = 10;
const num2 = 20;

// if (num1 < num2) {
//   small = num1;
// } else {
//   small = num2;
// }

// console.log(small);

let small = (small = num1 < num2 ? num1 : num2);
