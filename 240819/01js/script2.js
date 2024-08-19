// 신문법
// 1. 매개변수의 기본값
const hello = (name, message = "안녕하세요.") => {
  console.log(`${name}님! ${message}`);
};
hello("원빈", "반갑습니다.");
hello("현빈");

// 2. 전개연산자 구문
// 1) 함수의 매개변수에서의 전개연산자
const addNum = (...nums) => {
  let sum = 0;

  for (let num of nums) {
    sum += num;
  }
  return sum;
};
console.log(addNum(1, 2, 3, 4, 5));

// 2)참조타입 변수값의 독립화
const fruits = ["appls", "banana", "cherry"];

const favorite = [...fruits];

favorite[1] = "grape";

console.log(fruits, favorite);

// 3)서로 다른 두개의 배열을 하나로 병합
const animal = ["bird", "cat"];
const fruits01 = ["melon", "fineapple"];

console.log(animal.concat(fruits01));
console.log([...animal, ...fruits01]);

// 4) 구조분해할당, 전개연산자 구문
let [teacher, ...students] = ["kim", "lee", "pakr", "choi"];
console.log(teacher, students);

// 3. 객체 Key 접근방법
// 대괄호 표기법

const book = {
  title: "javascript",
  pages: 500,
};

book.published = "2024-08-19";
console.log(book);
console.log(book["title"]);

// 객체의 키 생성 방법
const fn = () => {
  return "result";
};

const add = (a, b) => {
  return a + b;
};

const obj = {
  [fn()]: "함수키",
  [`${add(10, 20)} key`]: "계산키",
};
console.log(obj);

// 객체 축약법
let user = {
  name: "슛돌이",
};
user.age = "25";
console.log(user);

const makeUser = (name, age) => {
  return {
    // 객체 선언 시, key네이밍과 value값으로 할당하고자 하는 매개변수의 이름이 동일하다면 아래처럼 축약 가능
    // name: name,
    // age: age,
    // =>
    name,
    age,
  };
};

const user1 = makeUser("영심이", 20);

console.log(user1);

// 객체에 심볼키를 사용하는 방법
let id1 = Symbol();
let id2 = Symbol();

console.log(id1 === id2);
// false

const id = Symbol("id");
const tel = Symbol("telephon number");

const member = {
  name: "david",
  age: 20,
  [id]: 1234,
  [tel]: () => {
    // prompt("전화번호는?");
  },
};
console.log(member);

for (let item in member) {
  console.log(`${item}`);
}

//  name, age
// 심볼은 객체안에 있는 키값을 은폐하고 싶을 때 사용 가능

console.log(member[id]);
console.log(member[tel]());

// 4. 구조분해할당
const fruits02 = ["사과", "복숭아"];

// const apple = fruits02[0];
// const peach = fruits02[1];
//  =>
const [apple, peach] = fruits02;

console.log(apple, peach);

const member03 = {
  name: "Park",
  age: 20,
};
const { name: userName, age } = member03;
console.log(userName, age, member03);

// 5. 배열 메서드
// map // filter // reduce

// map: 배열언애 았는 아이템(*요소)들에게 특정 함수 안에있는 기능을 동일하게 실행 및 적용을 한다. 이후 새로운 배열로 생성을 한다.(forEach랑 다른점: 새로운 배열의 생성 유무 & )
const numbers = [1, 2, 3, 4, 5];
// const newNumbers = numbers.map((number) => number * 2);
// console.log(newNumbers);
// console.log(numbers);
const newNumbers01 = numbers.map((number, index) => index + number * 3);
console.log(newNumbers01);

// filter:
const scores = [90, 35, 64, 88, 45, 92];
const highScores = scores.filter((score) => score >= 85);
console.log(highScores);

// reducer
const numbers1 = [1, 2, 3, 4, 5];

let result = numbers1.reduce((total, current) => total + current, 0);
console.log(result);
// total : 연산된 값을 누적 및 저장해놓는 변수의 역할을 한다.

// 이게 왜 필요한가??
// TS => 고차함수
// 명령형 & 선언형 프로그래밍 함수
// 저급함수
// 고급함수 => 1)커스터마이징 가능
