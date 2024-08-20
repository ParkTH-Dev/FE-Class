const result = document.querySelector("#result");
const member1 = ["HTML", "Node", "React"];
const member2 = ["CSS", "JS", "React"];
const member3 = ["JS", "React"];

const subjects = [...member1, ...member2, ...member3];

let resultList = new Set();

subjects.forEach((subject) => {
  resultList.add(subject);
});

console.log(resultList);

result.innerHTML = `<ul>
        ${[...resultList].map((subject) => `<li>${subject}</li>`).join("")}
</ul>`;

// 표현식 문 vs 실행문
