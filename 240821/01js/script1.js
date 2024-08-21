const phoneNum = document.querySelector("input[type='text']");
const warningMessage = document.querySelector("#warningMessage");
phoneNum.addEventListener("keyup", function () {
  const numValue = this.value;
  const trimNum = numValue.replace(/-/g, "");
  //   const regexp = /^[0]\d{8,9}[0-9]$/.test(trimNum);
  const regexp = /^[0][0-9]{9,10}$/.test(trimNum);
  //   const regexp = /^0[0-9]{9,10}$/.test(trimNum);
  if (!regexp) {
    warningMessage.innerText = "전화번호의 형식에 맞춰서 입력해주세요.";
  } else {
    warningMessage.innerText = "";
  }
});
