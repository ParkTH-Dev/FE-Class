document.querySelector("p").addEventListener("click", () => {
  console.log("p");
});
document.querySelector("section").addEventListener("click", () => {
  console.log("section");
});
document.querySelector("div").addEventListener("click", () => {
  console.log("div");
});

// 웹브라우저가 실행 => html, js 파싱(*문서를 읽으면서, 기본적으로 실행될 수 있는 요소 실행)
//

// function testFnc() {
//   alert("start");
// }
// testFnc();

const elements = document.querySelectorAll("*");

elements.forEach((item) => {
  item.addEventListener(
    "click",
    (e) => {
      console.log(
        `e.target : ${e.target.tagName}, // ${e.currentTarget.tagName}`
      );
    },
    true
  );
});
