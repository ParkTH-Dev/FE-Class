// form 요소 => form태그 안에 있는 세부적인 태그들을 모두 지칭하는 표현

// 요소. value

// const btn = document.querySelector("input[type='submit']");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   const orderName = document.querySelector("#orderName").value;
  const orderName = document.order.orderName;
  // console.log(orderName.value);
});

// console.log(document.forms[0].elements[4]);

const select = document.querySelector("#fruits");
// console.log(select.options[1].value);

select.addEventListener("change", function () {
  // console.log(this.options);
  const selectedText = this.options[this.selectedIndex].innerText;
  alert(`${selectedText}를 선택했습니다. 가격은 5000원 입니다.`);
});

const radiobox = document.querySelectorAll("input[name='userAge']");

radiobox.forEach((i) => {
  i.addEventListener("change", (e) => {
    const target = e.target;
    if (target.checked) {
      alert(`당신의 연령은 ${target.value}대 입니다`);
    }
  });
});

const checkBox = document.querySelectorAll("input[name='alarm']");
checkBox.forEach((i) => {
  i.addEventListener("click", (e) => {
    const target = e.target;
    if (target.checked) {
      alert(`당신의 관심은 ${target.value}입니다.`);
    }
  });
});
