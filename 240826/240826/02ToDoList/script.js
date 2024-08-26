const form = document.querySelector("form");
const todoItem = document.querySelector("#todoItem");
const todos = document.querySelector(".todos");
const getLocal = () => {
  let todosContainer;
  //값을 찾아오는 역할
  if (localStorage.getItem("todos") === null) todosContainer = [];
  else todosContainer = JSON.parse(localStorage.getItem("todos"));
  // console.log(todosContainer);
  todosContainer.forEach((todo) => {
    const newLi = document.createElement("li");
    newLi.className = "todo";
    // newLi.classList.add("todo");
    const newSpan = document.createElement("span");
    newSpan.className = "todoContent";
    newSpan.innerText = todo;
    const completBtn = document.createElement("button");
    completBtn.className = "completBtn";
    completBtn.innerText = "완료";
    const deletBtn = document.createElement("button");
    deletBtn.className = "deletBtn";
    deletBtn.innerText = "삭제";
    // newLi.appendChild(newSpan);
    // newLi.appendChild(completBtn);
    // newLi.appendChild(deletBtn);
    newLi.append(newSpan, completBtn, deletBtn);
    // savelocal(todoItem.value);
    todos.appendChild(newLi);
    todoItem.value = "";
  });
};
//DOM에 있는 컨텐츠가 로드가 된다면 getLocal함수 실행시켜줘
document.addEventListener("DOMContentLoaded", getLocal);

const savelocal = (todo) => {
  let todos;
  //값을 찾아오는 역할
  if (localStorage.getItem("todos") === null) todos = [];
  else todos = JSON.parse(localStorage.getItem("todos"));
  todos.push(todo);
  // 값을 보내는 역할
  localStorage.setItem("todos", JSON.stringify(todos));
};

const addTodo = (e) => {
  e.preventDefault();
  if (todoItem.value !== "") {
    const newLi = document.createElement("li");
    newLi.className = "todo";
    // newLi.classList.add("todo");
    const newSpan = document.createElement("span");
    newSpan.className = "todoContent";
    newSpan.innerText = todoItem.value;
    const completBtn = document.createElement("button");
    completBtn.className = "completBtn";
    completBtn.innerText = "완료";
    const deletBtn = document.createElement("button");
    deletBtn.className = "deletBtn";
    deletBtn.innerText = "삭제";
    newLi.append(newSpan, completBtn, deletBtn);
    savelocal(todoItem.value);
    todos.appendChild(newLi);
    todoItem.value = "";
  }
};

const removeLocal = (todo) => {
  let todosItem;

  if (localStorage.getItem("todos") === null) todosItem = [];
  else todosItem = JSON.parse(localStorage.getItem("todos"));

  const index = todosItem.indexOf(todo.children[0].innerText);
  // console.log(index);
  todosItem.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todosItem));
};

const manageTodo = (e) => {
  const whichButton = e.target.classList[0];
  // console.log(e.target.classList[0]);

  if (whichButton === "completBtn") {
    const todoItem = e.target.parentElement;
    todoItem.children[0].classList.toggle("completed");
  } else if (whichButton === "deletBtn") {
    const todoItem = e.target.parentElement;
    removeLocal(todoItem);
    todoItem.remove();
  }
};

todos.addEventListener("click", manageTodo);

// //정석
// form.addEventListener("submit", (e) => {
//   addTodo(e);
// });
//약식
form.addEventListener("submit", addTodo);
