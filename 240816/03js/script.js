// const str = "hello Sir!";
// const arr = ["today", "first", "theday"];

// console.log(arr.length);
// console.log(str.length);

// // 1) 특정위치의 문자에 접근 : charAt(위치)
// console.log(str.charAt(9));

// const counting = (string, word) => {
//   let count = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === word) {
//       count += 1;
//     }
//   }
//   return count;
// };

// const string = prompt("원하시는 문자열을 입력하세요.");
// const word = prompt("그 중 찾고싶은 문자열은 무엇인가요?");

// const result = counting(string, word);

// document.write(
//   `${string}에는 ${word}이라는 알파벳이 ${result}번 사용 되었습니다.`
// );

// 2)  특정문자열을 인자값을 제공 => 해당 문자열의 시작하는 인덱스 값을 찾는다. : indexOf()
// const str1 = "Good morning, everyone. Beautiful morning";
// // console.log(str1.indexOf("morning"));

// let firstIndex = str1.indexOf("morning");
// let secondIndex = str1.indexOf("morning", firstIndex + 1);
// let thirdIndex = str1.indexOf("morning", secondIndex + 1);
// console.log(thirdIndex);

// 특정 문자열로 시작하거나 끝나거나 혹은 포함하고 있거나
// startWith() // endWith() //includes()
// 해당 조건에 부합하는지 여부 체크할 때 주로 사용
// 조건에 부합하면 true // false

// console.log(str2.startsWith("Hello"));
// console.log(str2.startsWith("hello"));
// console.log(str2.startsWith("He"));

// console.log(str2.startsWith("el", 1));
// console.log(str2.startsWith("o", 4));

// console.log(str2.endsWith("everyone"));

// ES6 이전문법
// console.log(str2.indexOf("every") !== -1);

// console.log(str2.includes("every"));

// let str3 = " ab cd ef ";

// console.log(str3.trim());
// console.log(str3.trimStart());
// console.log(str3.trimEnd());

// console.log(str2.toUpperCase());
// console.log(str2.toLowerCase());

// 문자열에서 특정 문자를 추출하는 방법
// const str2 = "Good morning.";

// // console.log(str2.substring(5));
// // console.log(str2.substring(0, 4));

// // console.log(str2);

// console.log(str2.slice(0, 4));
// console.log(str2);
// // slice(): 음수값을 사용 가능

// console.log(str2.slice(-5, 12));

const str5 = "Hello everyon hellox";

console.log(str5.split(" "));
console.log(str5.split(""));
