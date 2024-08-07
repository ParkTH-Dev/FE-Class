const title = document.querySelector("#title");
const author = document.querySelector("#author");
const bookList = document.querySelector("#booklist");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const liItem = document.createElement("li");

  liItem.innerHTML = `${title.value} - ${author.value} <span>삭제</span>`;
  bookList.appendChild(liItem);

  title.value = "";
  author.value = "";

  const delBtns = document.querySelectorAll("li > span");
  delBtns.forEach((i) => {
    i.addEventListener("click", function () {
      this.parentNode.parentNode.removeChild(this.parentNode);
    });
  });
});
