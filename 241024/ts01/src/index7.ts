//제네릭이 필요한 상황
// 종합적인 타입을 정의하고 싶을 때 사용
// General : 종합적인

// const func = <T>(value: T): T => {
//   return value;
// };

// const swap = <T, U, V>(a: T, b: U, c: V) => {
//   return [a, b, c];
// };

// const [a, b, c] = swap("1", 2, true);

// const funcArr = <T>(data: T[]): T => {
//   return data[1];
// };

// let num = funcArr([0, 1, 2, "hi"]);

// console.log(num);

// let str = funcArr(["hi", "World"]);
// console.log(str);

// const retunFirst = <T>(data: [T, ...unknown[]]): T => {
//   return data[0];
// };

// const str = retunFirst([1, 3, "HI", "Hello"]);
// console.log(str);

// const func4 = <T extends { length: number }>(data: T): number => {
//   return data.length;
// };

// console.log(func4("111"));
// console.log(func4([1, 2, 3]));
// console.log(func4({ length: 1 }));
