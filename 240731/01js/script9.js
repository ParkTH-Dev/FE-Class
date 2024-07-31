let num = 1;
let t = `<table border=1>`;

for (let i = 1; i <= 5; i++) {
  t += `<tr>`;
  for (let n = 1; n <= 5; n++) {
    t += `<td>${num}</td>`;
    num++;
  }
  t += "</tr>";
}

t += `</table>`;
document.write(t);
