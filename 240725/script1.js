const output = document.querySelector("#output");
const arr = [2, 1, 3, 10];

// arr.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   if (a === b) {
//     return 0;
//   }
//   if (a < b) {
//     return -1;
//   }
// });

arr.sort((a, b) => {
  return a - b;
});

// const arr1 = arr.map((i) => i * 2);

output.innerText = arr;

// forEach & for & for of
