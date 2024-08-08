const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const cla = document.querySelector("#cla").value;
  if (name === "" || cla === "") {
    alert("정상적인 데이터를 입력하세요!");
  } else {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML += `<tr>
          <td>${name}</td>
          <td>${cla}</td>
        </tr>`;
  }
});

//   const tr = document.createElement("tr");
//   const td1 = document.createElement("td");
//   const td2 = document.createElement("td");
//   const nameText = document.createTextNode(name);
//   const claText = document.createTextNode(cla);
//   table.appendChild(tr);
//   tr.appendChild(td1);
//   tr.appendChild(td2);
//   td1.appendChild(nameText);
//   td2.appendChild(claText);
