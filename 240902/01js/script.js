const imgAll = document.querySelectorAll(".parallaxImg");
const totalNum = imgAll.length;
window.addEventListener("scroll", () => {
  let scrollNum = window.scrollY;

  //   console.log(scrollNum);
  if (scrollNum < 2500) {
    imgAll.forEach((img, i) => {
      img.style.transform = `translate3d(0,0,${
        scrollNum / (3 * (totalNum - i))
      }px)`;
    });
  }
});
