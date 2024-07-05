const title = document.querySelector(".first_article_text");

window.addEventListener("scroll", () => {
  if (scrollY >= 150) {
    title.style.fontSize = "20px";
  }
});
