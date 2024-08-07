const orederBtn = document.querySelector("#order");
const orderInfo = document.querySelector(".orderInfo");

orederBtn.addEventListener("click", () => {
  const newH = document.createElement("h2");
  const title = document.querySelector(".desc > h2");
  const textNode = document.createTextNode(title.innerText);

  newH.style.fontSize = "2rem";
  newH.style.color = "crimson";

  const newImg = document.createElement("img");
  const scrNode = document.createAttribute("src");
  scrNode.value =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAkEe6a8akUN3LMdk_5Zq9AVozagVfH768ng&s";

  newImg.setAttributeNode(scrNode);
  newH.appendChild(textNode);
  orderInfo.appendChild(newH);
  orderInfo.appendChild(newImg);
});
