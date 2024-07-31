// 폼요소에 입력될 값은 절대 전역요소로 찾아올 수 없다.

const btn = document.querySelector("input[type='button']");

const showSale = () => {
  const price = document.querySelector("#price").value;
  const sale = document.querySelector("#sale").value;
  const savedPrice = price * (sale / 100);
  const resultPrice = price - savedPrice;

  document.querySelector(
    ".bottomInfo p"
  ).innerHTML = `상품의 원래 가격은 ${price}원 이고, 할인율은 ${sale}%입니다. ${savedPrice}원을 절약한 ${resultPrice}원에 구매할 수 있습니다.`;
};

btn.addEventListener("click", showSale);
