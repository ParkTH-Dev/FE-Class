// 사용자로부터 숫자를 받는다
// 사용자에게 받은 숫자가 "소수"이면 바탕화면에 소수입니다.!
// 아니라면 "00숫자는 소수가 아닙니다." 출력
// 1은 소수가 아닙니다.
// 1과 자기 자신만으로 나눠질 수 있는 숫자

const num = Number(prompt("아무 숫자를 입력해주세요."));
let isPrime;

if (num === 1) {
  document.write(`1은 소수도 합성수도 아닙니다`);
} else if (num === 2) {
  document.write(`2는 소수입니다.`);
  isPrime = true;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    } else {
      isPrime = true;
      break;
    }
  }
  if (isPrime) {
    document.write(`${num}는 소수입니다.`);
  } else {
    document.write(`${num}은 소수가 아닙니다.`);
  }
}
