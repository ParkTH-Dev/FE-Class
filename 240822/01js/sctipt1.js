const xhr = new XMLHttpRequest();

xhr.open("GET", "student1.json");
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const student1 = JSON.parse(xhr.responseText);
    const result = document.querySelector("#result");
    result.innerHTML = `
        <h1> ${student1.name}</h1>
        <ul>
            <li>전공 : ${student1.major}</li>
            <li>학년 : ${student1.grade}</li>
        </ul>
    `;
  }
};
