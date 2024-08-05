// sticky Event
window.addEventListener("scroll", () => {
  const hashList = document.querySelector(".hashlist");
  const scrollY = window.scrollY;
  if (scrollY > 300) {
    hashList.classList.add("active");
  } else {
    hashList.classList.remove("active");
  }
});

// touch event
const hashContent = document.querySelector(".hashcontent");
const listClientWidth = hashContent.clientWidth;
const listScollWidth = hashContent.clientWidth + 200;

let startX = 0; //최초 터치 및 마우스다운 지점
let nowX = 0; //현재 이동중인 지점을 알려주는 좌표값
let endX = 0; // 터치 종료 지점
let listX = 0; //두번째 터치 지점
const getClientX = (e) => {
  //   const isTouches = e.touches ? true : false;
  //   return isTouches ? e.touches[0].clientX : e.clientX;
  return e.touches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX = () => {
  //   console.log(getComputedStyle(hashContent).transform.split(/[^\-0-9]+/g)[5]);
  return parseInt(
    getComputedStyle(hashContent).transform.split(/[^\-0-9]+/g)[5]
  );
};
const setTranslateX = (x) => {
  hashContent.style.transform = `translateX(${x}px)`;
};

const onScrollMove = (e) => {
  nowX = getClientX(e);
  setTranslateX(listX + nowX - startX);
};
const onScrollEnd = (e) => {
  endX = getClientX(e);
  listX = getTranslateX();
  if (listX > 0) {
    setTranslateX = 0;
    hashContent.style.transition = `all 0.1s`;
    listX = 0;
  } else if (listX < listClientWidth - listScollWidth) {
    setTranslateX(listClientWidth - listScollWidth);
    hashContent.style.transition = `all 0.1s`;
    listX = listClientWidth - listScollWidth;
  }
  window.removeEventListener("touchmove", onScrollMove);
  window.removeEventListener("mousemove", onScrollMove);
  window.removeEventListener("mouseup", onScrollEnd);
  window.removeEventListener("touchend", onScrollEnd);
  hashContent.removeEventListener("touchstart", onScrollStart);
  hashContent.removeEventListener("mousedown", onScrollStart);
};

const onScrollStart = (e) => {
  startX = getClientX(e);
  window.addEventListener("touchmove", onScrollMove);
  window.addEventListener("mousemove", onScrollMove);
  window.addEventListener("touchend", onScrollEnd);
  window.addEventListener("mouseup", onScrollEnd);
};

hashContent.addEventListener("touchstart", onScrollStart);
hashContent.addEventListener("mousedown", onScrollStart);
