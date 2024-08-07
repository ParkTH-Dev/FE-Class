const container = document.querySelector(".container");
const newP = document.createElement("p");
const textNode = document.createTextNode("Typescript");
container.appendChild(newP);

const newP02 = document.createElement("p");
const textNode02 = document.createTextNode("react.js");
newP02.appendChild(textNode02);

newP.appendChild(textNode);

const basisNode = document.querySelectorAll("p")[2];
container.insertBefore(newP02, basisNode);

// const target = document.querySelectorAll("p")[0];
// target.addEventListener("click", function () {
//   this.remove();
// });

const items = document.querySelectorAll("p");
items.forEach((i, index) => {
  i.addEventListener("click", function () {
    this.parentNode.removeChild(this);
  });
});
