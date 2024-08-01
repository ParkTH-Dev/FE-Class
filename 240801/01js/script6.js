// 사용자에게 숫자 하나를 받습니다.
// 조건: 무조건 1보다 큰 숫자를 받는다.
// 사용자에게 받는 숫자를 기준으로 1부터 해당 숫자까지 중에 짝수만 찾아 더한값을 콘솔에 출력

const num = Number(prompt("숫자를 하나 입력해수세요"));
let num1 = 0;
if (num <= 1 && num === null) {
  alert("2 이상의 숫자를 입력해주세요");
} else {
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      num1 += i;
    }
  }
  console.log(num1);
}
