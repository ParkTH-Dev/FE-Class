// modal
// 버튼과 modal의 class값을 똑같이 써서
// 클릭한 버튼의 class 값을 modal class로 찾아와
// 해당 class모달창을 띄운다.
const modalBtns = document.querySelectorAll(".item");
const modals = document.querySelectorAll(".modal");
const close = document.querySelectorAll(".close");
// 모달창 열기
modalBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const btnId = button.id;
    const modal = document.querySelector(`.${btnId}`);
    if (modal) {
      modal.classList.add("active");
    }
  });
});
// 모달창 닫기
close.forEach((e) => {
  e.addEventListener("click", () => {
    const btnId = e.id;
    const modal = document.querySelector(`.${btnId}`);
    if (modal) {
      modal.classList.remove("active");
    }
  });
});

// 스크롤 부드럽게 이동
// scroll-behavior: smooth;가 scoll-snap과 같이 적용이 안돼 js로 컨트롤
document.querySelectorAll("a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); //기본 이벤트 적용 막기
    const targetId = this.getAttribute("href"); //a태그 속성값을 가지고옴
    const targetElement = document.querySelector(targetId); //속성값을 targetElement에 저장
    targetElement.scrollIntoView({
      behavior: "smooth",
    });
  });
});
