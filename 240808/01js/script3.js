const span = document.querySelector("span");
const userDate = prompt("시작한 날짜를 입력해주세요", "2024-08-01");

const now = new Date();
const firstDate = new Date(userDate);
console.log(firstDate);

const passedTime = now.getTime() - firstDate.getTime();
const passedDate = Math.round(passedTime / (24 * 60 * 60 * 1000));

span.innerText = `${passedDate}일 달성`;
