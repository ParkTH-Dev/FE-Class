const numbers = [4, 7, 2, 5, 9, 1, 8, 6, 3];

let num1 = [];
let num2 = [];
numbers.forEach((num) => {
  if (num % 2 === 0) {
    num1 += num;
  } else {
    num2 += num;
  }
});
console.log(`${num1}짝수의 개수는 ${num1.length}개 입니다.`);
console.log(`${num2}홀수의 개수는 ${num2.length}개 입니다.`);
// 문제점
// += 연산자를 사용할 경우 배열이 추가돼는것이 아니라 문자열로 변환이 되기 때문에 push()를 사용하는 것이 더욱 맞는 방법
const numbers1 = [4, 7, 2, 5, 9, 1, 8, 6, 3];

let num3 = [];
let num4 = [];
numbers.forEach((num) => {
  if (num % 2 === 0) {
    num3.push(num);
  } else {
    num4.push(num);
  }
});
console.log(`${num3}짝수의 개수는 ${num1.length}개 입니다.`);
console.log(`${num4}홀수의 개수는 ${num2.length}개 입니다.`);

// 문자열 반환 배열 반환의 차이

// 다른 정답
const numbers3 = [4, 7, 2, 5, 9, 1, 8, 6, 3];

let even = 0;
let odd = 0;

for (let i = 0; i < numbers3.length; i++) {
  //배열의 길이만큼 반복하겠다.
  if (numbers3[i] % 2 === 0) {
    //배열의 각 요소에 연산 후 맞으면 even에 추가 아니면 odd에 추가
    even++;
  } else {
    odd++;
  }
}
console.log(`짝수 ${even}`);
console.log(`홀수 ${odd}`);
