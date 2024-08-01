// 사용자로부터 수학 점수를 받아라.
// 국어점수를 받아라
// 함수를 사용해서 수학 + 국어 / 2 계산하여 알림창에 출력

// const num1 = Number(prompt("국어점수"));
// const num2 = Number(prompt("수학점수"));

// const num3 = () => {
//   alert((num1 + num2) / 2);
// };
// num3();

const arr = ["수학", "국어"];

function testAvg() {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Number(prompt(`${arr} 점수`));
  }
  let avg = sum / arr.length;
  return avg;
}

alert(`평균점수는 ${testAvg()}점 입니다.`);
