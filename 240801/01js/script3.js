// 웹 브라우저 문서 내 버튼을 만들어라.
//해당 버튼을 클릭할 때마다 색상이 변경되도록
// 변경되어야 하는 색상은 white, yellow, aqua, purple
// 마지막 색상 다음은 첫번째 색상인 화이트로 변경되면 된다.

document.body.innerHTML = `<button id="a">Click</button>`;
const color = ["white", "yellow", "aqua", "purple"];
const btn = document.querySelector("#a");

let i = 0;
btn.addEventListener("click", () => {
  i++;
  if (i >= color.length) i = 0;
  const bodyTag = document.querySelector("body");
  bodyTag.style.backgroundColor = color[i];
});
