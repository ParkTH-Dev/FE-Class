const name = prompt("이름을 입력해주세요.", "ex.홍길동");
const height = parseFloat(prompt("키를 입력해주세요.", "ex.180.5"));
const weight = parseFloat(prompt("몸무게를 입력해주세요.", "ex.79.2"));

const normalWeight = (height - 100) * 0.9;

let result = weight >= normalWeight - 5 && weight <= normalWeight + 5;

// 삼항연산자
result = result ? "적정 체중입니다." : "관리가 필요합니다.";

alert(`${name}님은 ${result}`);
