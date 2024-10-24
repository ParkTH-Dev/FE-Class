// const funk = (a: number, b: number): number => {
//   return a + b;
// };
// const funk1 = (name = "Taehwan"): void => {
//   console.log(name);
// };

// funk1(1);
// const self = (name = "taehwan", age: number, tall?: number): void => {
//   console.log(`${name}님 반갑습니다.`);
//   if (typeof tall === "number") {
//     console.log(`${name}은 키가 ${tall}입니다.`);
//   }
// };

const getItem = (...rest: number[]): number => {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
};
