// js ES6 => 혼종?!
// Map & Set
// 배열 & 객체
// 배열: 인덱스 // 개수 // 넣고 빼고 등등의 장점
// 객체: 프로퍼티 자료 형태를 유지(*어떤 자료가 무슨 의미인지 확인 가능)의 장점
//  배열 + 객체 => Map
// Map => 배열의 형태를 띄고있는 이터러블한 객체의 자료구조들의 공통적인 약점은? 중복되는 값을 제어할 수 없다.

// const bag = new Map();
// bag.set("color", "red");

// console.log(bag);

const myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);

console.log(myCup);

myCup.set("type", "mini");

console.log(myCup);
