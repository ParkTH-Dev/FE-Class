// 문자열 && 배열
// 둘다 length
// 둘다 index값

//ES6문법이 적용되기 전
// const str5 = "Hello, everyone!";
// // const arr5 = str5.split("");

// const arr5 = [...str5];
// const str6 = arr5.join("");

// console.log(arr5);
// console.log(str6);

// const string = prompt("영문 소문자로 된 문자열을 입력하세요.");

// const first = string[0].toUpperCase();
// const remainStr = string.slice(1);
// const result = first + remainStr;

// const result = [string[0].toUpperCase(), ...string.slice(1)].join("");
// document.write(result);

// 자료구조 & 알고리즘
// 배열 => 얼만큼 잘 활용?!
// 배열은 어떻게 만드는가?
// 1) 생성자 함수
let arr = new Array();
arr[0] = "first";
arr[1] = "second";

console.log(arr);

// 2) 변수에 빈 배열 할당 및 선언

let season = [];

season[0] = "spring";
season[1] = "summer";
season[2] = "fall";
season[3] = "winter";
console.log(season);

// 3) 직접 배열 선언 및 할당

const pets = ["dog", "cat", "lion"];
console.log(pets);
