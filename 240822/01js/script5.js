const url = "https://reqres.in/api/products/10";
const result = document.querySelector(".result");
const xhr = new XMLHttpRequest();

xhr.open("GET", url);
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const students = JSON.parse(xhr.responseText);
    result.innerHTML = `
    <p>${students.data.name}</p>
    
`;
  }
};
