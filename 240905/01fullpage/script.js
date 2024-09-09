// fullpage.js
const sec2Title = document.querySelector("#sec2 .title");
const sec2Slider = document.querySelector("#sec2 .slider_wrap");
const sec2 = () => {
  sec2Title.style.cssText = `
  opacity:1;
  transform: translateX(0px);
  `;
  sec2Slider.style.cssText = `
  opacity:1;
  transform: translateX(0px);
  `;
};
const sec2_reset = () => {
  sec2Title.style.cssText = `
  opacity:0;
  transform: translateX(-50px);
  `;
  sec2Slider.style.cssText = `
  opacity:0;
    transform: translateX(50px);
  `;
};
new fullpage("#fullpage", {
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ["Num0", "Num1", "Num2", "Num3", "Num4"],
  afterLoad: (old_elem, new_elem, direction) => {
    if (new_elem.index === 2) {
      sec2();
      console.log("sec2 hi");
    }
    if (old_elem.index === 2) {
      sec2_reset();
      console.log("sec2 bye");
    }
  },
});

// navEvent

const navBtn = document.querySelector("#nav_icon");

navBtn.addEventListener("click", () => {
  document.body.classList.toggle("nav_active");
});
