//사용자로부터 두개의 숫자를 받습니다.
// 2개 숫자의 최대 공약수를 찾아서 콘솔창에 출력
// *복수의 숫자를 동시에 나눌 수 있는 수 중에서 가장 큰 수
//  예 4와 12의 최대 공약수는 4입니다

const num1 = Number(prompt("숫자를 입력하세요."));
const num2 = Number(prompt("숫자를 입력하세요."));

function getGCD() {
  const max = num1 > num2 ? num1 : num2;
  let gcd = 0;
  for (let i = 1; i <= max; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}
alert(`${num1}과 ${num2} 최대 공약수는 ${getGCD()}`);
