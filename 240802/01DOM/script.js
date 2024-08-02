// const main = document.querySelector("main");
// const profile = main.querySelector("main > #profile");
// const profile = document.getElementById("profile");
// console.log(profile);

// const h1 = main.querySelector("h1");
// const desc = document.querySelector("#desc");
// const user = desc.querySelectorAll(".user");

// const img = document.getElementsByClassName("image");
// const h1 = document.getElementsByTagName("h1");
// console.log(h1);

// user.forEach((item) => {
//   item.addEventListener("click", () => {
//     console.log("click");
//   });
// });

// console.log(user[user.length - 1]);
// 유사배열?
// => 99% 배일이 가지고 있는 속성을 똑같이 갖고있음

// const desc = document.querySelector("#desc");
// const iu = desc.querySelectorAll(".user")[0];

// console.log(iu);
// console.log(desc.textContent);
// console.log(desc.innerText);
// console.log(desc.innerHTML);

const title = document.querySelector("#title");
title.addEventListener("mouseover", function () {
  this.innerText = "나의 프로필";
  this.style.backgroundColor = "black";
  this.style.color = "white";
});

const profileImg = document.querySelector("#profile img");
profileImg.addEventListener("click", function () {
  this.src = `./img/pf2.png`;
});

const firstP = document.querySelector("#desc p:first-child");
firstP.addEventListener("click", function () {
  this.innerHTML = `<p style="color:crimson"><b>뉴진스</b></p>`;
});

const secondP = document.querySelector("#desc p:nth-child(2)");
secondP.addEventListener("click", function () {
  this.classList.toggle("active");
  //   if (!this.classList.contains("active")) {
  //     this.classList.add("active");
  //   } else {
  //     this.classList.remove("active");
  //   }
});
