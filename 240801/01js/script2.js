// 1.배열을 명확하게 이해/사용할 수 있다.
// 2.=>반복문 적재적소
// 3.=>내가 원하는 기능 구현 함수

// window 객체 안에는 시간 관련 내장함수 존재
// setInterval
// clrearInterval
// setTimeout

// 콜백1 (JS에서 자주 만날 콜백함수 1번 예제)
// let count = 0;
// const cbFunc = () => {
//   console.log(count);
//   if (count++ > 4) clearInterval(timer);
// };

// const timer = setInterval(cbFunc, 300);

// 콜백2 (JS에서 자주 만날 콜백함수 2번 예제)
// map함수는 배열안에 있는 각각의 개별 아이템을 찾아와서 연산 작업 후 새로운 배열로 만듬(기존 배열은 그대로)
// 새로운 배열을 반환할때는 중괄호 빼기
// const arr = [10, 20, 30];
// const newArr = arr.map((i, index) => i + 5);
// console.log(newArr);

// 콜백3 (JS에서 자주 만날 콜백함수 3번 예제)
// setTimeout => 일정시간 지연 후 실행
// setTimeout(function () {
//   console.log(this); //window
// }, 300);

// this 객체
// this는 "보통 일반적으로" 현재 실행되고 있는 함수의 주체 혹은 객체등의 아이템을 의미
// this는 카멜레온 같음

// window에 탑재된 시간 내장 함수에서 this를 사용하면 무조건 window
// 일반적인 콜백함수 내에서 주체가 되고있는 아이템을 찾아오고 싶을 때에는 직접 해당 인자를 언급하거나 경우에 따라서 this객체를 사용합니다.

// 콜백4 (JS에서 자주 만날 콜백함수 4번 예제)
// const arr2 = [1, 2, 3, 4, 5];
// arr2.forEach((i) => {
//   console.log(i);
// });

// 콜백5 (JS에서 자주 만날 콜백함수 5번 예제)
// this => 함수 형태 종류에 따라서 지칭하는 대상이 달라짐
// document.body.innerHTML += `<button id="a">Click</button>`;
// document.querySelector("#a").addEventListener("click", function () {
//   console.log(this);
// });

// 콜백6 (JS에서 자주 만날 콜백함수 번 예제)
// 객체안에 있는 메서드 함수의 경우, this는 function일 경우 해당 메소드 함수의 부모격인 객체를 찾아오지만, 만약 화살표 함수를 사용한다면, window객체를 찾아온다.
// const obj = {
//   vals: [1, 2, 3],
//   logValues: function () {
//     console.log(this);
//   },
// };

// obj.logValues();

// 객체 안에 메서드형식으로 정의한 함수는 외부에 별도 존재하는 함수의 콜백함수로 사용할시, 기존 객체와의 관계성이 제거된다.
// const arr3 = [4, 5, 6];
// arr3.forEach(obj.logValues);

// 메서드를 콜백함수로 사용 시, 해당 부모를 찾아올 수 있도록 찾아오는 방법
// const obj1 = {
//   name: "obj1",
//   func: function () {
//     console.log(this);
//     const self = this;
//     return function () {
//       console.log(self.name);
//     };
//   },
// };
// const callBack = obj1.func();
// setTimeout(callBack, 1000);

// 위 코드보다 효율적으로 this객체를 사용하는 방법
// const obj1 = {
//   name: "obj1",
//   func: function () {
//     console.log(this.name);
//   },
// };

// setTimeout(obj1.func.bind(obj1), 1000);

// 콜백함수 => 콜백지옥
// setTimeout(
//   (name) => {
//     let coffeeList = name;
//     console.log(coffeeList);
//     setTimeout(
//       (name) => {
//         coffeeList += `,${name}`;
//         console.log(coffeeList);
//         setTimeout(
//           (name) => {
//             coffeeList += `,${name}`;
//             console.log(coffeeList);
//             setTimeout(
//               () => {
//                 coffeeList += `,${name}`;
//                 console.log(coffeeList);
//               },
//               500,
//               "카페라때"
//             );
//           },
//           500,
//           "카페모카"
//         );
//       },
//       500,
//       "아메리카노"
//     );
//   },
//   500,
//   "에스프레소"
// );

// 콜백지옥에서 빠져나오는 법
// 1.
// let coffeeList = "";

// const addCaffemoca = (name) => {
//   coffeeList += `, ${name}`;
//   console.log(coffeeList);
//   //   setTimeout(addCaffemoca, 500, "카페모카");
// };

// const addAmericano = (name) => {
//   coffeeList += `, ${name}`;
//   console.log(coffeeList);
//   setTimeout(addCaffemoca, 500, "아메리카노");
// };

// const addEspress = (name) => {
//   coffeeList = name;
//   console.log(coffeeList);
//   setTimeout(addAmericano, 500, "아메리카노");
// };
// setTimeout(addEspress, 500, "에스프레소");

// 어떤 함수가 실행 => 종료(또 다른 실행))
// 2.
// Promise() => 클래스를 선언할 때

// new Promise(); // Class로 생성된 프로토타입 함수(역할: 붕어빵 틀)

// let likePizza = true;

// const pizza = new Promise((resolve, reject) => {
//   if (likePizza) {
//     resolve("피자를 주문합니다.");
//   } else {
//     reject("피자를 주문하지 않습니다.");
//   }
// });

// pizza.then((result) => {
//   console.log(result);
// });

new Promise((resolve) => {
  setTimeout(() => {
    const name = "에스프레소";
    console.log(name);
    resolve(name);
  }, 500);
}).then((prevName) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const name = `${prevName}, 카페모카`;
      console.log(name);
      resolve(name);
    }, 500);
  }).then((prevName) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const name = `${prevName}, 카페모카`;
        console.log(name);
        resolve(name);
      }, 500);
    });
  });
});
