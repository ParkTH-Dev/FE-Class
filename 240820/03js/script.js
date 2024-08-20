const result = document.querySelector(".item");

const user = [
  { name: "여우", age: 27 },
  { name: "코끼리", age: 41 },
  { name: "돼지", age: 29 },
  { name: "구미호", age: 31 },
  { name: "햄스터", age: 15 },
  { name: "강아지", age: 45 },
];

const buttons = document.querySelectorAll(".btn");
const updateList = (filterList) => {
  let listHtml = "";
  filterList.forEach((item) => {
    listHtml += `<span>${item.name} : ${item.age}</span>`;
  });
  result.innerHTML = listHtml;
};

const onClickButton = (e) => {
  const targetAge = e.target.dataset.age;
  const filterList = user.filter((data) => data.age >= targetAge);
  updateList(filterList);
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    onClickButton(e);
  });
});
