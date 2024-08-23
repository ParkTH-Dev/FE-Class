// 기존 콜백함수의 단점을 최소화 하고자 첫번째 대안 => Promise
// Promise  => 약속
// Promise가 왜 생겻냐? callback함수 중 어떤 요소라도 1개만 에러가 발생되는 경우에도 연결되어있는 다른 callback함수 실행에도 영향을 끼침
// 그런데 callback함수가 많이 연결되어있는 경우 디버깅 및 알아보기가 매우 힘들어짐

// 생성자함수 혹은 Class를 통해서 탄생된 프로토타입 = Promise

const likePizza = true;

// producing code : 제작 코드
const pizza = new Promise((resolve, reject) => {
  if (likePizza) {
    resolve("피자를 주문합니다!");
  } else {
    reject("피자를 주문하지 않습니다.");
  }
});
// consuming code : 실행코드
pizza
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
  .finally(() => console.log("완료"));
