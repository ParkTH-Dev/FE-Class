// const factorial = (num) => {
//   if (num === 1 || num === 0) {
//     return 1;
//   } else {
//     return num * factorial(num - 1);
//   }
// };
// console.log(factorial(5));

const factorial1 = (num) => {
  let sum = 1;
  for (let i = 1; i <= num; i++) {
    sum *= i;
  }
  return sum;
};

console.log(factorial1(5));
