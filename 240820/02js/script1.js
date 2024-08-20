const input = document.querySelector("input[type='text']");
const result = document.querySelector(".result");

const obj = [
  { id: "123", name: "곰" },
  { id: "1021", name: "사자" },
  { id: "6021", name: "여우" },
  { id: "1", name: "돼지" },
  { id: "2", name: "코끼리" },
  { id: "3", name: "기린" },
];

input.addEventListener("keyup", function () {
  let value = "";
  value = obj.find((e) => e.id === this.value);
  if (value) {
    result.innerText = value.name;
  } else if (this.value === "") {
    result.innerText = "유저 검색 결과 없음";
  } else {
    result.innerText = "존재하지 않는 값입니다.";
  }
});

// 어디서부터 이벤트가 시작되는 것인가?
// 이벤트가 시작된 이후에 어떤 값을 생성 or 처리
// 어떻게 자료구조를 만들고 갈 것인가.
// > 문법 (*메서드 // 속성 등)
