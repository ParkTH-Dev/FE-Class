// const xhr = new XMLHttpRequest();
// xhr.open("GET", "students.json");
// xhr.send();

// const renderHTML = (students) => {
//   let output = "";
//   for (let student of students) {
//     output += `
//         <h2>${student.name}</h2>
//         <ul>
//         <li>전공 : ${student.major}</li>
//         <li>학년 : ${student.grade}</li>
//         </ul>
//     `;
//   }
//   document.querySelector(".result").innerHTML = output;
// };

// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const students = JSON.parse(xhr.responseText);
//     renderHTML(students);
//   }
// };

fetch("students.json")
  .then((response) => response.json())
  .then((data) => {
    let output = "";
    data.forEach((student) => {
      output += `
      <h2>${student.name}</h2>
        <ul>
        <li>전공 : ${student.major}</li>
        <li>학년 : ${student.grade}</li>
    </ul>
        `;
    });
    document.querySelector(".result").innerHTML = output;
  })
  .catch((err) => {
    console.log(err);
  });
