// JS 현 시점 날짜정보 데이터를 생성해주는 함수

const toDay = new Date();

const hrs = toDay.getHours();

const container = document.querySelector(".container");
const newImg = document.createElement("img");

newImg.src = hrs < 12 ? "./images/morning.jpg" : "./images/afternoon.jpg";
container.appendChild(newImg);
