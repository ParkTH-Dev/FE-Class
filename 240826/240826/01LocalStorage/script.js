let students = ["kim", "lee", "park"];

localStorage.setItem("student", JSON.stringify(students));

let localData;

if (localStorage.getItem("students") === null) localData = [];
else localData = JSON.parse(localStorage.getItem("students"));

localData.push("choi");

console.log(localData);
