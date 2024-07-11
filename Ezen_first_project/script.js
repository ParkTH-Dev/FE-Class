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

// img slide
// document.querySelector(".btn1").addEventListener("click", () => {
//   document.querySelector(".slides").style.transform = "translate(0)";
// });
// document.querySelector(".btn2").addEventListener("click", () => {
//   document.querySelector(".slides").style.transform = "translate(-260px)";
// });
// document.querySelector(".btn3").addEventListener("click", () => {
//   document.querySelector(".slides").style.transform = "translate(-520px)";
// });
// document.querySelector(".btn4").addEventListener("click", () => {
//   document.querySelector(".slides").style.transform = "translate(-780px)";
// });
// document.querySelector(".btn5").addEventListener("click", () => {
//   document.querySelector(".slides").style.transform = "translate(-1040px)";
// });
// document.querySelector(".btn6").addEventListener("click", () => {
//   document.querySelector(".slides").style.transform = "translate(-1300px)";
// });

const slides = document.querySelector(".slides");
const slideArray = document.querySelectorAll(".slides > li");
const totalSlides = slideArray.length;
let currentIndex = 0;
document.querySelector(".next_btn").addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }
  slides.style.transform = `translateX(${-currentIndex * 260}px)`;
});
document.querySelector(".prev_btn").addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  }
  slides.style.transform = `translateX(${-currentIndex * 260}px)`;
});

// dark mode
const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", () => {
  document.querySelector("#wrapper").classList.toggle("dark");
});

// typeWriter();
const text = "안녕하세요!\n프론트엔드 개발자를 꿈꾸는\n박태환입니다!";
let index = 0;
let speed = 150;
let delay = 2000; // 텍스트가 끝까지 출력된 후 대기 시간 (밀리초)

function typeWriter() {
  if (index < text.length) {
    let char = text.charAt(index);
    if (char === "\n") {
      char = "<br>";
    }
    document.querySelector(".title > #text").innerHTML += char;
    index++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(() => {
      document.querySelector(".title > #text").innerHTML = "";
      index = 0;
      typeWriter();
    }, delay);
  }
}

typeWriter();
