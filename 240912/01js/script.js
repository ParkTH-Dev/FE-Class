// // 병합연산자
// const numA = 10;
// const numB = 20;
// const numC = undefined;
// const numD = null;

// // console.log(numA ?? numB);
// console.log(numD ?? numB);

// // 삼항조건연산자
// const strA = "안녕하세요.";
// typeof strA === "string"
//   ? console.log("문자자료형")
//   : console.log("문자자료형 아님");

// // switch문
// const fruit = "apple";
// switch (fruit) {
//   case "apple": {
//     console.log("사과");
//     break;
//   }
//   case "banana": {
//     console.log("바나나");
//     break;
//   }
//   default:
//     console.log("찾는과일없음");
// }

// // Object 생성 및 온점, 대괄호표기법
// let objA = {};
// objA.numA = 1;
// objA["numB"] = 2;
// console.log(objA);

// let objB = new Object();
// console.log(objB);

// console.log(objA.numA);

// //객체의 값을 반복실행하고자 할 때
// const person = {
//   name: "taehwan",
//   age: 20,
//   location: "seoul",
// };
// // 객체 안에 있는 key값을 배열로 반환
// const keyArr = Object.keys(person);
// console.log(keyArr);

// keyArr.forEach((item) => {
//   let value = person[item];
//   console.log(value);
// });

// // 구조분해할당
// const testO = {
//   name: "David",
//   age: 20,
//   skill: "JS",
// };

// // const name = testO.name;

// const { name, age, skill } = testO;
// console.log(name, age, skill);

// // 단락회로평가
// const calcA = () => {
//   console.log("A");
//   return false;
// };
// const calcB = () => {
//   console.log("B");
//   return true;
// };

// console.log(calcA() && calcB());
// console.log(calcA() || calcB());

// // react는 기본적으로 브라우저가 켜지는 순간 브라우저를 통해서 앱을 여는 순간 무조건 컴포넌트가 마운트가 된다.
// // 왜? => 가상돔을 만들어야 하니까.
// // 영화데이터를 찾아오도록 하는 fetch()
// // 정상적으로 fetch함수를 통해서 불러오는 영화 API데이터를 찾아오지 못한다.

// // 찾아온 영화데이터를 가지고 약 3000픽셀정도 되는 높이값을 가지고 있는 브라우저 화면을 채워야하는 상황 => 20개
// // 로딩스피너
// // console.log(movieData && data.title);

// 전개연산자
// const arrA = [1, 2, 3];
// const arrB = [4, 5, 6];

// const arrC = [...arrA, ...arrB];
// console.log(arrC);

// const objA = {
//   a: 1,
//   b: 2,
// };
// const objB = { c: 3 };

// const objC = {
//   ...objA,
// };

// console.log(objC);

// 배열 메서드***
let food = ["짜장면", "피자", "치킨"];
// push 값을 배열의 맨 끝에 추가 후 length값 반환
// const newLength = food.push("탕수육");
// console.log(newLength);

// pop
// const removeItem = food.pop();
// console.log(removeItem);
// console.log(food);

// const newLength = food.unshift("갈비찜");
// console.log(newLength);
// console.log(food);

// shift()
// const removeItem = food.shift();
// console.log(removeItem);
// console.log(food);

// slice()
// const sliced = food.slice(0, 2);
// const sliced = food.slice(1);
// console.log(sliced);
// console.log(food);

// concat
// const arrA = [1, 2];
// const arrB = [3, 4];
// const arrC = arrA.concat(arrB);
// console.log(arrC);

// indexOf
// console.log(food.indexOf("피자"));

// includes
// console.log(food.includes("피자"));

// find
// const arr = [
//   { name: "taehwan" },
//   { name: "david" },
//   { name: "romeo" },
//   { name: "jule" },
// ];

// const element = arr.find((item) => item.name === "taehwan");
// console.log(element);
// console.log(arr);

// filter
const arr = [
  { name: "태환", hobby: "체스" },
  { name: "태환1", hobby: "바둑" },
  { name: "태환2", hobby: "장기" },
  { name: "태환3", hobby: "체스" },
];
// const filteredArr = arr.filter((item) => {
//   return item.hobby === "체스";
// });
// console.log(filteredArr);
// console.log(arr);

// map
// const newArr = arr.map((item) => item.name);
// console.log(newArr);
// console.log(arr);

// sort
// const arr1 = [10, 5, 3];
// arr1.sort(a - b);
// console.log(arr1);

// const compare = (a, b) => {
//   //   if (a > b) return 1;
//   //   else if (a < b) return -1;
//   //   else return 0;
//   a - b;
// };

// arr1.sort(compare);
// console.log(arr1);

// join
// console.log(food.join("-"));

// reduce
const arr3 = [1, 2, 3, 4, 5];
const result = arr3.reduce((acc, item) => acc + item, 0);
console.log(result);
