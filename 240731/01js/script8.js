// 스크립트 for문을 활용해서 2단~9단

for (let i = 2; i <= 9; i++) {
  document.write(`<h2>구구단 ${i}단 </h2>`);
  for (let n = 1; n <= 9; n++) {
    document.write(
      `<li style="color: blue font-size:16px">${i} x ${n} = ${i * n}</li> <br/>`
    );
  }
  document.write(" <br/>");
}
