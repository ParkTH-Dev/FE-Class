const result = document.querySelector(".result");
const order = new Promise((resolve, reject) => {
  const coffee = prompt("어떤 커피를 주문하시겠습니까?", "아메리카노");
  if (coffee !== null && coffee !== "") {
    result.innerText = `${coffee} 주문 접수`;
    setTimeout(() => {
      resolve(coffee);
    }, 2000);
  } else {
    reject("커피를 주문하지 않았습니다.");
  }
});

const display = (coffee) => {
  const end = document.querySelector(".end");
  end.innerText = `주문하신 ${coffee}가 나왔습니다.`;
  end.classList.add("active");
  result.classList.add("done");
};
const showErr = (err) => {
  console.log(err);
};

order.then(display).catch(showErr);
console.log(order);

// Promise의 단계
// 1단계 : pending => 프로미스를 생성하고 실제 실행을 시키기 전, 대기상태
// 2단계 : fulfilled => 프로미스를 통해서 어떤 실행 값 혹은 실행문을 정상적으로 실행시킨 상태
// 3단계 : rejected => 프로미스를 통해서 실행하고자 했던 요소를 정상적으로 실행시키지 못한 상태
