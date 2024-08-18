// let pets = ["dog", "cat", "mouse"];
// pets[0] = "hamster";
// console.log(pets);

// 배열은 이터러블 객체
// 이터레이터라는 요소의 유무에 따라
// 제너레이터 // map, set
// 반복문을 쓸 수 있냐 없냐의 차이가 크다.
//
// for, forEach, for of
// 배열 선언 값
// 1) 복수형
// 2) 블록변수 값
// 3)

// const colors = ["red", "green", "blue", "white", "black"];

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }
// for (let colors of colors) {

// // }
// colors.forEach((color, i) => {
//   console.log(`colors[${i}] : ${color}`);
// });

// colors.forEach((color, i, arr) => {
//   console.log(`[${arr}][${i}] : ${color}`);
// });

// const vegitable = ["양상추", "토마토", "피클"];
// const meat = ["불고기"];

// const meatBurger = vegitable.concat(meat);
// console.log(meatBurger);

// const cheeseBurger = [...vegitable, ...chese, "빵"];
// console.log(cheeseBurger);
// let numbers = [6, 9, 3, 21, 28];
// console.log(numbers);
// console.log(numbers.reverse());

// let week = ["sun", "mon", "tue"];
// let values = [5, 20, 3, 11, 4, 15];

// 1. 배열선언할 때, 변수면 복수
// 2. 일반 for문 선언, 블록변수 0으로 시작
// 3. 배열을 담는 변수를 선언할 때, const VS let => 배열의 특정 메서드 함수들 > 새로운 배열을 생성해주는 메서드 함수 > 빈배열 생성 > 값을 추가하는 행위
// console.log(week);
// console.log(week.sort());

// console.log(values);
// console.log(values.sort());

// sort는 개발자가 정의하고자 하는 함수를 콜백함수로 반드시 입력해라.

// values.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
//   if (a === 0) return 0;
// });
// console.log(values);

// values.sort((a, b) => {
//   return b - a;
// });
// console.log(values);

// let animals = ["lion", "bear", "bird"];

// console.log(animals);

// animals.pop();

// console.log(animals);

// animals.push("tiger");

// console.log(animals);

// let fruits = ["apple", "pear", "banana"];

// fruits.shift();

// console.log(fruits);

// fruits.unshift("cherry");

// console.log(fruits);

let subjects = ["html", "css", "javascript", "typescript", "react"];

// console.log(subjects.splice(2));
let week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

console.log(week.splice(1, 5));
console.log(week);

// splice는 원본데이터 값을 변경시킴

let colors = ["red", "green", "blue", "white", "black"];
console.log(colors.slice(0, 4));
console.log(colors);
