const items = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = aside.querySelector("span");
console.log(aside, close);

items.forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    const video = e.currentTarget.querySelector("video");
    video.play();
  });
  item.addEventListener("mouseleave", (e) => {
    const video = e.currentTarget.querySelector("video").pause();
  });

  item.addEventListener("click", (e) => {
    let title = e.currentTarget.querySelector("h2").innerText;
    let txt = e.currentTarget.querySelector("p").innerText;
    let videoSrc = e.currentTarget.querySelector("video").getAttribute("src");
    aside.querySelector("h1").innerText = title;
    aside.querySelector("p").innerText = txt;
    aside.querySelector("video").setAttribute("src", videoSrc);
    aside.querySelector("video").play();

    aside.classList.add("on");
  });
  close.addEventListener("click", () => {
    aside.classList.remove("on");
    aside.querySelector("video").pause();
  });
});
